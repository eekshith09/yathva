const API_URL = "https://yathva.onrender.com";

export async function analyzeNewsContent(text: string) {
  const response = await fetch(`${API_URL}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    console.error("API error:", response.status, response.statusText);
    throw new Error("API request failed");
  }

  return await response.json();
}
