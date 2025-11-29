import React from 'react';
import { Page } from '../types';
import { ArrowRight, ShieldCheck, Cpu, Zap } from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
          <span className="text-sm font-medium text-indigo-300">YATHVA Engine Online</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-6 leading-tight">
          Truth in the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
            Age of Noise
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-xl text-gray-400 font-light leading-relaxed">
          An advanced AI-powered ecosystem designed to detect misinformation with 
          unprecedented accuracy using Explainable AI (LIME) and Transformer architectures.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => setPage(Page.PREDICTION)}
            className="px-8 py-4 bg-white text-yathva-dark font-bold rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all flex items-center gap-2 group"
          >
            Try YATHVA
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => setPage(Page.AI_APPROACH)}
            className="px-8 py-4 glass-panel text-white font-medium rounded-lg hover:bg-white/10 transition-all border border-white/10"
          >
            AI Approach
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors text-left">
            <div className="h-10 w-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Real-time Analysis</h3>
            <p className="text-sm text-gray-400">Instant verification using optimized Logistic Regression and future-ready BERT models.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors text-left">
            <div className="h-10 w-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Explainable AI</h3>
            <p className="text-sm text-gray-400">Powered by LIME to show you exactly <i>why</i> a news piece is classified as fake or real.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors text-left">
            <div className="h-10 w-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">High Accuracy</h3>
            <p className="text-sm text-gray-400">Trained on Politifact and GossipCop datasets with extensive data balancing techniques.</p>
          </div>
        </div>
      </main>
    </div>
  );
};
