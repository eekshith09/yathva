import pandas as pd
import string
import nltk
import re
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
from sklearn.naive_bayes import MultinomialNB
import pickle

nltk.download("stopwords")
nltk.download("wordnet")
nltk.download("omw-1.4")

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

# Load datasets
base = "C:/Yathva/datasets/"
politifact_real = pd.read_csv(base + "politifact_real.csv")
politifact_fake = pd.read_csv(base + "politifact_fake.csv")
gossipcop_real = pd.read_csv(base + "gossipcop_real.csv")
gossipcop_fake = pd.read_csv(base + "gossipcop_fake.csv")

# Labels
politifact_real["label"] = 1
gossipcop_real["label"] = 1
politifact_fake["label"] = 0
gossipcop_fake["label"] = 0

# Combine & shuffle
df = pd.concat([politifact_real, gossipcop_real, politifact_fake, gossipcop_fake],
               axis=0).sample(frac=1, random_state=42)

# Clean text
df["title"] = df["title"].apply(clean_text)

# TF-IDF
tfidf = TfidfVectorizer(max_features=8000, ngram_range=(1, 3))
X = tfidf.fit_transform(df["title"])
y = df["label"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Naive Bayes
model = MultinomialNB()
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))
print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))

# Save
pickle.dump(model, open("model.pkl", "wb"))
pickle.dump(tfidf, open("tfidf.pkl", "wb"))

print("Training Completed! model.pkl + tfidf.pkl saved.")
