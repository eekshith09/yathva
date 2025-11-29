import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Search, BarChart3, Lightbulb } from 'lucide-react';

export const ExplainableAI: React.FC = () => {
  return (
    <SectionWrapper title="Explainable AI (LIME)" subtitle="Breaking the 'Black Box' of Machine Learning.">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Intro */}
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-300">
            <strong>LIME (Local Interpretable Model-agnostic Explanations)</strong> is a technique that approximates 
            any black-box machine learning model with a local, interpretable model to explain each individual prediction.
          </p>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-xl text-center">
             <div className="mx-auto w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4 text-indigo-400">
               <Search className="w-6 h-6" />
             </div>
             <h4 className="font-bold text-white mb-2">Perturbation</h4>
             <p className="text-sm text-gray-400">LIME generates new variations of the text by removing words to see how the prediction changes.</p>
          </div>
          <div className="glass-panel p-6 rounded-xl text-center">
             <div className="mx-auto w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 text-purple-400">
               <BarChart3 className="w-6 h-6" />
             </div>
             <h4 className="font-bold text-white mb-2">Weighting</h4>
             <p className="text-sm text-gray-400">It assigns weights to specific words. Positive weights support the 'Fake' label; negative supports 'Real'.</p>
          </div>
          <div className="glass-panel p-6 rounded-xl text-center">
             <div className="mx-auto w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4 text-cyan-400">
               <Lightbulb className="w-6 h-6" />
             </div>
             <h4 className="font-bold text-white mb-2">Insight</h4>
             <p className="text-sm text-gray-400">The user sees exactly which words triggered the AI's decision, fostering trust.</p>
          </div>
        </div>

        {/* Visual Example */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">Visualization Example</h3>
          <div className="space-y-4">
            <div className="text-gray-300 font-mono text-sm bg-black/30 p-4 rounded-lg">
              "Breaking: <span className="bg-rose-500/30 text-rose-200 px-1 rounded">Aliens</span> landed in <span className="bg-emerald-500/30 text-emerald-200 px-1 rounded">Washington</span> today confirmed by <span className="bg-rose-500/30 text-rose-200 px-1 rounded">anonymous</span> sources."
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
               <div>
                  <div className="flex justify-between text-gray-400 mb-1">
                    <span>Aliens</span>
                    <span className="text-rose-400">Fake (+0.85)</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1.5 rounded-full"><div className="bg-rose-500 h-1.5 rounded-full w-[85%]"></div></div>
               </div>
               <div>
                  <div className="flex justify-between text-gray-400 mb-1">
                    <span>Anonymous</span>
                    <span className="text-rose-400">Fake (+0.60)</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1.5 rounded-full"><div className="bg-rose-500 h-1.5 rounded-full w-[60%]"></div></div>
               </div>
               <div>
                  <div className="flex justify-between text-gray-400 mb-1">
                    <span>Washington</span>
                    <span className="text-emerald-400">Real (-0.20)</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1.5 rounded-full"><div className="bg-emerald-500 h-1.5 rounded-full w-[20%]"></div></div>
               </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 italic">
              *The words highlighted in Red push the probability towards FAKE. Green pushes towards REAL.
            </p>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};
