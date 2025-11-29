import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X, BrainCircuit } from 'lucide-react';

interface NavigationProps {
  activePage: Page;
  setPage: (page: Page) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activePage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'Prediction', value: Page.PREDICTION },
    { label: 'AI Approach', value: Page.AI_APPROACH },
    { label: 'ML Approach', value: Page.ML_APPROACH },
    { label: 'Dataset', value: Page.DATASET },
    { label: 'XAI (LIME)', value: Page.EXPLAINABLE_AI },
    { label: 'About', value: Page.ABOUT },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20">

          {/* LOGO (Clean, Balanced Size) */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setPage(Page.HOME)}
          >
            <div className="bg-gradient-to-tr from-indigo-500 to-purple-600 p-2.5 rounded-lg mr-3">
              <BrainCircuit className="h-6 w-6 text-white" />
            </div>

            {/* Slightly increased (3xl → premium look) */}
            <span className="text-3xl font-bold tracking-wide text-white">
              YATHVA
            </span>
          </div>

          {/* DESKTOP MENUS (Medium Size – PERFECT UI) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-5">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setPage(item.value)}
                  className={`
                    px-3 py-2 rounded-md text-base font-medium
                    transition-all duration-200
                    ${
                      activePage === item.value
                        ? 'text-white bg-white/10 shadow-[0_0_10px_rgba(99,102,241,0.25)]'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setPage(item.value);
                  setIsOpen(false);
                }}
                className={`
                  block w-full text-left px-4 py-2 rounded-md text-base font-medium
                  ${
                    activePage === item.value
                      ? 'text-white bg-indigo-600/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
