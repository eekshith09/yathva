export enum Page {
  HOME = "HOME",
  PREDICTION = "PREDICTION",
  ML_APPROACH = "ML_APPROACH",
  AI_APPROACH = "AI_APPROACH",
  EXPLAINABLE_AI = "EXPLAINABLE_AI",
  ABOUT = "ABOUT",
}

export interface PredictionResponse {
  prediction: "Real" | "Fake";
}

export interface ExplanationResponse {
  explanation: [string, number][];
}
