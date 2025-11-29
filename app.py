import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS
import nltk
import re
import string
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from lime.lime_text import LimeTextExplainer

app = Flask(__name__)
CORS(app)

# -----------------------------
# LOAD MODEL + TFIDF
# -----------------------------
model = pickle.load(open("model.pkl", "rb"))
tfidf = pickle.load(open("tfidf.pkl", "rb"))

# -----------------------------
# NLTK SETUP
# -----------------------------
nltk.download("stopwords")
stop_words = set(stopwords.words("english"))
lemmatizer = WordNetLemmatizer()

def clean_text(text):
    """Basic text cleaning"""
    if not isinstance(text, str):
        return ""
    text = text.lower()
    text = re.sub(r"\d+", "", text)
    text = text.translate(str.maketrans("", "", string.punctuation))
    words = [w for w in text.split() if w not in stop_words]
    words = [lemmatizer.lemmatize(w) for w in words]
    return " ".join(words)

# LIME
explainer = LimeTextExplainer(class_names=["Fake", "Real"])

# -----------------------------
# PREDICT ENDPOINT
# -----------------------------
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

        lime_words = [{"word": w, "weight": float(score)} for w, score in lime_exp.as_list()]

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

# -----------------------------
# DO NOT USE app.run() ON RENDER
# -----------------------------
# Render starts the app automatically using Gunicorn
