import json
import pickle
import re
import string
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from lime.lime_text import LimeTextExplainer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

# Download NLTK data
nltk.download("stopwords")
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

# Load models (this will be done on cold start)
model = pickle.load(open("model.pkl", "rb"))
tfidf = pickle.load(open("tfidf.pkl", "rb"))
explainer = LimeTextExplainer()

def handler(event, context):
    try:
        # Parse the request
        body = json.loads(event['body'])
        text = body.get("text", "")

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

        response = {
            "label": label,
            "confidence": confidence,
            "explanation": explanation_text,
            "limeHighlights": lime_words
        }

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            'body': json.dumps(response)
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({"error": str(e)})
        }