import React from "react";
import { SectionWrapper } from "../components/SectionWrapper";
import { Github, Linkedin, Mail } from "lucide-react";

export const About: React.FC = () => {
  const team = [
    {
      name: "Kandukuri Eekshith Sai",
      role: "Lead AI/ML Engineer • Full-Stack Developer • UI/UX Designer",
      contribution:
        "Designed full system architecture, built UI/UX, implemented ML model, integrated LIME explainability, managed backend–frontend flow, and led project deployment.",
      image: "/team/eek.jpg",
      linkedin: "https://www.linkedin.com/in/eekshith-sai-kandukuri-79b50a289/",
      github: "https://github.com/eekshith09",
      gmail: "mailto:eekshithsai22925@gmail.com",
    },
    {
      name: "Nallu Jeevani Reddy",
      role: "ML Model Engineer • Dataset Researcher",
      contribution:
        "Improved preprocessing pipeline, contributed to TF-IDF engineering, supported model validation, and optimized classifier performance.",
      image: "/team/jev.jpg",
      linkedin: "https://www.linkedin.com/in/jeevaninallu/",
      gmail: "mailto:Jeevani.Nallu23@st.niituniversity.in",
    },
    {
      name: "Pulapally Nikita Reddy",
      role: "Data Analyst • Research Specialist",
      contribution:
        "Performed dataset analysis, preprocessing, cleaning, and verified patterns across Politifact & GossipCop datasets.",
      image: "/team/nik.jpg",
      linkedin: "https://www.linkedin.com/in/nikita-pulapally-598131300/",
      gmail: "mailto:nikitapulapally@gmail.com",
    },
    {
      name: "Chaluvadi Eswara Navaneeth",
      role: "Data Specialist • Research Engineer",
      contribution:
        "Handled feature extraction, TF-IDF vectorization, and text-cleaning operations for training data reliability.",
      image: "/team/nav.jpg",
      linkedin: "https://www.linkedin.com/in/eswara-navaneeth-chaluvadi-a7b855339/",
      gmail: "mailto:EswaraNavaneeth.Chaluvadi23@st.niituniversity.in",
    },
    {
      name: "Gunda Akshaya",
      role: "Quality Assurance • Research Analyst",
      contribution:
        "Tested predictions across multiple news categories, validated results, and ensured system reliability and consistency.",
      image: "/team/akk.jpg",
      linkedin: "https://www.linkedin.com/in/gundaakshaya/",
      gmail: "mailto:gunda.Akshaya23@st.niituniversity.in",
    },
  ];

  return (
    <SectionWrapper title="About YATHVA" subtitle="Innovation through collaboration.">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-8 rounded-2xl border-l-4 border-indigo-500">
            <h4 className="text-xl font-bold text-white mb-4">The Mission</h4>
            <p className="text-gray-400 leading-relaxed">
              To democratize access to advanced truth-verification tools using ML.
              YATHVA empowers users to detect misinformation with transparent,
              explainable AI powered by LIME.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border-l-4 border-emerald-500">
            <h4 className="text-xl font-bold text-white mb-4">Why It Matters</h4>
            <p className="text-gray-400 leading-relaxed">
              In an era of digital noise, fake news spreads fast. YATHVA helps
              people identify false information while also explaining *why*
              something is fake — enabling critical thinking and awareness.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-white mb-2">The Team</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full opacity-70"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A passionate team of engineers & researchers working together to
              solve the misinformation crisis.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="
                  glass-panel p-8 rounded-2xl border border-white/5 hover:border-white/20 
                  transition-all duration-300 group
                  flex flex-col items-center text-center
                  w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] 
                  hover:-translate-y-2
                "
              >
                
                {/* Profile Photo */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-5 border-2 border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-lg font-bold text-white mb-1">
                  {member.name}
                </h4>

                <div className="px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-white/5 text-gray-400 border border-white/5">
                  {member.role}
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {member.contribution}
                </p>

                {/* Social Icons */}
                <div className="mt-auto flex gap-4 opacity-60 group-hover:opacity-100 transition-opacity">

                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      className="p-2 bg-white/5 rounded-full hover:bg-white/10 cursor-pointer text-white"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="p-2 bg-white/5 rounded-full hover:bg-white/10 cursor-pointer text-white"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href={member.gmail}
                    className="p-2 bg-white/5 rounded-full hover:bg-white/10 cursor-pointer text-white"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-xl font-display font-light italic text-white/60">
            "United in research, dedicated to the truth."
          </p>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default About;
