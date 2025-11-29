const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

export async function analyzeNewsContent(text: string) {
  const response = await fetch(`${API_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  const data = await response.json();

  return {
    label: data.label,
    confidence: data.confidence,
    explanation: data.explanation,
    limeHighlights: data.limeHighlights,
  };
}
