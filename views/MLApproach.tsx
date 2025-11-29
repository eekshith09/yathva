import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Database, Filter, Scissors, Variable, SplitSquareHorizontal, Binary } from 'lucide-react';

export const MLApproach: React.FC = () => {
  const steps = [
    {
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      title: "1. Dataset Merging",
      desc: "Politifact + GossipCop datasets (Real + Fake) are merged into one balanced training corpus."
    },
    {
      icon: <Filter className="w-6 h-6 text-purple-400" />,
      title: "2. Data Cleaning",
      desc: "Lowercasing, punctuation removal, number removal, and removal of missing rows."
    },
    {
      icon: <Scissors className="w-6 h-6 text-rose-400" />,
      title: "3. Preprocessing",
      desc: "Stopword removal and Lemmatization using WordNet to reduce words to their base form."
    },
    {
      icon: <Binary className="w-6 h-6 text-cyan-400" />,
      title: "4. Vectorization (TF-IDF)",
      desc: "Headlines are converted into numerical vectors using a bi-gram TF-IDF model (5000 features)."
    },
    {
      icon: <SplitSquareHorizontal className="w-6 h-6 text-emerald-400" />,
      title: "5. Balancing & Train-Test Split",
      desc: "RandomOverSampler ensures equal Fake/Real samples, followed by an 80/20 train-test split."
    },
    {
      icon: <Variable className="w-6 h-6 text-amber-400" />,
      title: "6. Model Training (Naive Bayes)",
      desc: "Multinomial Naive Bayes is trained on TF-IDF vectors and evaluated using accuracy & confusion matrix."
    }
  ];

  return (
    <SectionWrapper title="ML Workflow" subtitle="From raw data to a reliable classifier.">
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-white/10 ml-6 md:ml-12 space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              
              {/* Dot */}
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-800 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors"></div>

              {/* Step Card */}
              <div className="glass-panel p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
