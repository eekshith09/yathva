import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './views/Home';
import Prediction from "./views/Prediction";
import { AIApproach } from './views/AIApproach';
import { MLApproach } from './views/MLApproach';
import { Dataset } from './views/Dataset';
import { ExplainableAI } from './views/ExplainableAI';
import { About } from './views/About';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home setPage={setCurrentPage} />;
      case Page.PREDICTION:
        return <Prediction />;
      case Page.AI_APPROACH:
        return <AIApproach />;
      case Page.ML_APPROACH:
        return <MLApproach />;
      case Page.DATASET:
        return <Dataset />;
      case Page.EXPLAINABLE_AI:
        return <ExplainableAI />;
      case Page.ABOUT:
        return <About />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-yathva-dark text-yathva-text font-sans selection:bg-indigo-500/30 selection:text-white">
      <Navigation activePage={currentPage} setPage={setCurrentPage} />
      
      <div className="transition-opacity duration-500 ease-in-out">
        {renderPage()}
      </div>

      <footer className="py-8 border-t border-white/5 mt-12 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} YATHVA. Built with Streamlit & React concepts.</p>
          <p className="mt-2 text-xs opacity-50">Designed by Kandukuri Eekshith Sai</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
