from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
from lime.lime_text import LimeTextExplainer
import re
import string
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

# 🔥 IMPORTANT: Download once (safe for Render)
try:
    nltk.data.find("corpora/stopwords")
except LookupError:
    nltk.download("stopwords")

try:
    nltk.data.find("corpora/wordnet")
except LookupError:
    nltk.download("wordnet")

stop_words = set(stopwords.words("english"))
lemmatizer = WordNetLemmatizer()

def clean_text(text):
    if not isinstance(text, str):
        return ""
    text = text.lower()
    text = re.sub(r'\d+', '', text)
    text = text.translate(str.maketrans("", "", string.punctuation))
    words = [w for w in text.split() if w not in stop_words]
    words = [lemmatizer.lemmatize(w) for w in words]
    return " ".join(words)

app = Flask(__name__)
CORS(app)

# Load model
model = pickle.load(open("model.pkl", "rb"))
tfidf = pickle.load(open("tfidf.pkl", "rb"))

explainer = LimeTextExplainer()

# ✅ FIX: Root route (important for Render)
@app.route("/")
def home():
    return "Yathva Backend Running 🚀"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        text = data.get("text", "")

        cleaned = clean_text(text)
        vectorized = tfidf.transform([cleaned])

        prediction = model.predict(vectorized)[0]
        proba = model.predict_proba(vectorized)[0]

        label = "REAL" if prediction == 1 else "FAKE"
        confidence = round(float(proba[prediction] * 100), 2)

        lime_exp = explainer.explain_instance(
            cleaned,
            lambda x: model.predict_proba(tfidf.transform(x)),
            num_features=5
        )

        lime_words = [
            {"word": w, "weight": float(score)}
            for w, score in lime_exp.as_list()
        ]

        explanation_text = (
            "This headline matches patterns commonly found in reliable news."
            if label == "REAL"
            else "This headline shows patterns often seen in fabricated or misleading news."
        )

        return jsonify({
            "label": label,
            "confidence": confidence,
            "explanation": explanation_text,
            "limeHighlights": lime_words
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ❗ DO NOT REMOVE THIS
if __name__ == "__main__":
    app.run(debug=True)