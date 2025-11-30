@app.route("/predict", methods=["POST"])
def predict():
    import traceback
    try:
        print("🔥 /predict HIT")

        data = request.get_json()
        print("📥 Incoming JSON:", data)

        text = data.get("text", "")
        print("📝 Raw text:", text)

        cleaned = clean_text(text)
        print("🧹 Cleaned text:", cleaned)

        vectorized = tfidf.transform([cleaned])
        print("🔢 Vectorized shape:", vectorized.shape)

        prediction = model.predict(vectorized)[0]
        proba = model.predict_proba(vectorized)[0]

        print("🎯 Prediction:", prediction)
        print("📊 Probabilities:", proba)

        label = "REAL" if prediction == 1 else "FAKE"
        confidence = round(float(proba[prediction] * 100), 2)

        lime_exp = explainer.explain_instance(
            cleaned,
            lambda x: model.predict_proba(tfidf.transform(x)),
            num_features=5
        )
        print("💡 LIME generated")

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
        error_msg = str(e)
        error_trace = traceback.format_exc()

        print("❌ ERROR:", error_msg)
        print(error_trace)

        return jsonify({
            "error": error_msg,
            "trace": error_trace
        }), 500
