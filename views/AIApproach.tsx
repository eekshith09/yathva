import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';

export const AIApproach: React.FC = () => {
  return (
    <SectionWrapper title="AI Architecture" subtitle="The intelligence behind YATHVA’s detection system.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Card 1 */}
        <div className="glass-panel p-8 rounded-2xl border-l-4 border-indigo-500 hover:bg-white/5 transition-all">
          <h3 className="text-2xl font-bold text-white mb-4">Why AI?</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            Fake news spreads rapidly and often looks deceptively real. YATHVA uses Natural Language Processing (NLP)
            to analyze linguistic patterns, verify textual consistency, and identify cues commonly found in fabricated content.
          </p>
        </div>

        {/* Card 2 */}
        <div className="glass-panel p-8 rounded-2xl border-l-4 border-purple-500 hover:bg-white/5 transition-all">
          <h3 className="text-2xl font-bold text-white mb-4">TF-IDF Embeddings</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            The system converts headlines into numerical vectors using TF-IDF with bi-grams. This highlights important,
            meaningful terms and suppresses common filler words — creating a unique fingerprint for each news headline.
          </p>
        </div>

        {/* Card 3 */}
        <div className="glass-panel p-8 rounded-2xl border-l-4 border-cyan-500 hover:bg-white/5 transition-all">
          <h3 className="text-2xl font-bold text-white mb-4">Handling Imbalanced Data</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            Fake and real news datasets are rarely balanced. YATHVA uses RandomOverSampler to create a fair 50–50 distribution,
            preventing the model from being biased towards the majority class.
          </p>
        </div>

        {/* Card 4 */}
        <div className="glass-panel p-8 rounded-2xl border-l-4 border-emerald-500 hover:bg-white/5 transition-all">
          <h3 className="text-2xl font-bold text-white mb-4">Naive Bayes Classifier</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            The final model uses Multinomial Naive Bayes — a fast, lightweight classifier ideal for text.
            It excels with TF-IDF features and provides stable, high-confidence predictions suitable for real-time evaluation.
          </p>
        </div>

        {/* Future Upgrades */}
        <div className="md:col-span-2 glass-panel p-8 rounded-2xl border border-white/10 mt-4 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
          <h3 className="text-2xl font-bold text-white mb-4">Future Roadmap</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
             <div className="p-4 bg-black/20 rounded-lg">
                <span className="block text-indigo-400 font-bold mb-1">Transformer Models</span>
                <p className="text-sm text-gray-400">Upgrade to BERT, RoBERTa, or DistilBERT for deeper semantic analysis.</p>
             </div>
             <div className="p-4 bg-black/20 rounded-lg">
                <span className="block text-purple-400 font-bold mb-1">Cross-Platform Tracking</span>
                <p className="text-sm text-gray-400">Fake news monitoring across X/Twitter, YouTube, and WhatsApp.</p>
             </div>
             <div className="p-4 bg-black/20 rounded-lg">
                <span className="block text-cyan-400 font-bold mb-1">Adaptive Learning</span>
                <p className="text-sm text-gray-400">Model retraining using newly emerging misinformation patterns.</p>
             </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
