import React, { useState } from "react";
import { SectionWrapper } from "../components/SectionWrapper";
import { analyzeNewsContent } from "../services/yathvaService";
import { Search, AlertTriangle, CheckCircle, Loader2, Info } from "lucide-react";

export const Prediction: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handlePredict = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setResult(null);

    try {
      const response = await analyzeNewsContent(inputText);
      setResult(response);
    } catch (error) {
      console.error("Prediction error:", error);
    }

    setIsLoading(false);
  };

  return (
    <SectionWrapper
      title="Fake News Checker"
      subtitle="Paste a news headline or text to verify its authenticity using our ML engine."
    >
      <div className="max-w-3xl mx-auto">
        <div className="glass-panel rounded-2xl p-6 md:p-8 shadow-2xl">

          {/* Text Input */}
          <div className="relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter news title or content here..."
              className="w-full h-48 bg-black/20 text-white placeholder-gray-500 border border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 resize-none text-lg"
            />
            <div className="absolute bottom-4 right-4 flex items-center text-xs text-gray-500">
              <Info className="w-3 h-3 mr-1" /> ML prediction & LIME explanation
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handlePredict}
              disabled={isLoading || !inputText}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg shadow-lg disabled:opacity-50 flex items-center gap-2"
            >
              {isLoading ? <><Loader2 className="w-5 h-5 animate-spin" /> Analyzing…</> :
                <><Search className="w-5 h-5" /> Verify with AI</>}
            </button>
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-8">
            <div className={`glass-panel rounded-2xl p-1 overflow-hidden 
              ${result.label === "FAKE"
                ? "bg-gradient-to-br from-rose-500/20 to-orange-500/20"
                : "bg-gradient-to-br from-emerald-500/20 to-teal-500/20"}`}>
              
              <div className="bg-yathva-card/90 p-8 rounded-xl">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {result.label === "FAKE"
                      ? <AlertTriangle className="w-8 h-8 text-rose-500" />
                      : <CheckCircle className="w-8 h-8 text-emerald-500" />}
                    <h3 className={`text-3xl font-bold 
                      ${result.label === "FAKE" ? "text-rose-500" : "text-emerald-500"}`}>
                      {result.label === "FAKE" ? "FAKE NEWS DETECTED" : "LIKELY REAL NEWS"}
                    </h3>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-gray-400">Confidence Score</div>
                    <div className="text-2xl font-mono font-bold text-white">{result.confidence}%</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-2.5 mb-6">
                  <div
                    className={`h-2.5 rounded-full
                      ${result.label === "FAKE" ? "bg-rose-500" : "bg-emerald-500"}`}
                    style={{ width: `${result.confidence}%` }}
                  />
                </div>

                {/* Explanation */}
                <div className="mb-6">
                  <h4 className="text-sm text-gray-300 uppercase mb-2">AI Explanation</h4>
                  <p className="text-gray-300 bg-white/5 p-4 rounded-lg">{result.explanation}</p>
                </div>

                {/* LIME Highlights */}
                {result.limeHighlights.length > 0 && (
                  <div>
                    <h4 className="text-sm text-gray-300 uppercase mb-3">Key Influencers (LIME)</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.limeHighlights.map((item: any, idx: number) => (
                        <span key={idx}
                          className={`px-3 py-1 rounded text-sm border
                            ${item.weight > 0
                              ? "bg-rose-500/10 border-rose-500/30 text-rose-300"
                              : "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"}`}>
                          {item.word} ({item.weight.toFixed(2)})
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}

      </div>
    </SectionWrapper>
  );
};

export default Prediction;
