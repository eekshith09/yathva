import React from "react";
import { SectionWrapper } from "../components/SectionWrapper";
import { FileSpreadsheet, ExternalLink } from "lucide-react";

export const Dataset: React.FC = () => {
  const datasets = [
    {
      name: "Politifact Real",
      file: "/datasets/politifact_real.csv",
      type: "Real News",
      source: "Politifact",
      color: "text-emerald-400",
    },
    {
      name: "Politifact Fake",
      file: "/datasets/politifact_fake.csv",
      type: "Fake News",
      source: "Politifact",
      color: "text-rose-400",
    },
    {
      name: "GossipCop Real",
      file: "/datasets/gossipcop_real.csv",
      type: "Real News",
      source: "GossipCop",
      color: "text-emerald-400",
    },
    {
      name: "GossipCop Fake",
      file: "/datasets/gossipcop_fake.csv",
      type: "Fake News",
      source: "GossipCop",
      color: "text-rose-400",
    },
  ];

  return (
    <SectionWrapper
      title="Datasets Used"
      subtitle="The 4 core datasets that power the YATHVA Fake News Detector."
    >
      <div className="max-w-5xl mx-auto">
        <div className="glass-panel rounded-2xl p-6 shadow-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 border-b border-white/10">
                <th className="py-3">Dataset</th>
                <th className="py-3">Source</th>
                <th className="py-3">Type</th>
                <th className="py-3 text-right">Open</th>
              </tr>
            </thead>

            <tbody>
              {datasets.map((ds, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 hover:bg-white/5 transition-all"
                >
                  <td className="py-4 font-medium text-white flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5 text-indigo-400" />
                    {ds.name}
                  </td>

                  <td className="py-4 text-gray-300">{ds.source}</td>

                  <td className={`py-4 font-semibold ${ds.color}`}>{ds.type}</td>

                  <td className="py-4 text-right">
                    <a
                      href={ds.file}
                      target="_blank"
                      className="text-indigo-400 hover:text-indigo-300 flex justify-end items-center gap-1"
                    >
                      Open CSV <ExternalLink className="w-4 h-4" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-gray-400 text-sm">
          CSV files stored locally in <code>/public/datasets/</code>.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Dataset;
