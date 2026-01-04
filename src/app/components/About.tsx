import {
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export function About() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[#1e1e1e] p-4 sm:p-6 md:p-8 lg:p-10 font-['Fira_Code']">
      <div className="max-w-5xl mx-auto">
        {/* Code Editor Style */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3 text-[#608b4e] mb-3 text-sm sm:text-base">
            <span className="text-[#6a9955] shrink-0 font-mono text-base sm:text-lg">1</span>
            <span className="break-words">// Portfolio Component</span>
          </div>
          <div className="flex items-center gap-3 mb-4 text-sm sm:text-base flex-wrap">
            <span className="text-[#6a9955] shrink-0 font-mono text-base sm:text-lg">2</span>
            <span className="text-[#c586c0]">import</span>
            <span className="text-[#4ec9b0]">Developer</span>
            <span className="text-[#c586c0]">from</span>
            <span className="text-[#ce9178] break-all">
              './henis-nakrani'
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-lg bg-gradient-to-br from-[#3794ff] to-[#c586c0] flex items-center justify-center text-2xl sm:text-4xl text-white shrink-0 overflow-hidden">
              <img
                src="/Photo.JPG"
                alt="Henis Nakrani"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="mb-4 text-sm sm:text-base">
                <span className="text-[#6a9955] shrink-0 font-mono text-base sm:text-lg mr-3">3</span>
                <span className="text-[#dcdcaa]">
                  const
                </span>
                <span className="text-[#4fc1ff] ml-2">
                  developer
                </span>
                <span className="text-[#d4d4d4] ml-2">=</span>
                <span className="text-[#d4d4d4] ml-2">
                  {"{"}
                </span>
              </div>

              <div className="ml-6 sm:ml-10 space-y-3 mb-4 text-sm sm:text-base">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[#9cdcfe]">
                    name:
                  </span>
                  <span className="text-[#ce9178] ml-2 break-words">
                    "Henis Sureshkumar Nakrani"
                  </span>
                  <span className="text-[#d4d4d4]">,</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[#9cdcfe]">
                    role:
                  </span>
                  <span className="text-[#ce9178] ml-2 break-words">
                    "Machine Learning & Automation Engineer | Ex-SDE @ Scaleteam | Ex-Automation QA @ OPS | AWS Solutions Architect | M.Eng, McMaster University"
                  </span>
                  <span className="text-[#d4d4d4]">,</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[#9cdcfe]">
                    location:
                  </span>
                  <span className="text-[#ce9178] ml-2">
                    "Canada"
                  </span>
                  <span className="text-[#d4d4d4]">,</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[#9cdcfe]">
                    experience:
                  </span>
                  <span className="text-[#b5cea8] ml-2">3 Years </span>
                  <span className="text-[#d4d4d4]">,</span>
                </div>
              </div>

              <div className="mb-4 text-sm sm:text-base">
                <span className="text-[#6a9955] shrink-0 font-mono text-base sm:text-lg mr-3">4</span>
                <span className="text-[#d4d4d4]">
                  {"}"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="mb-4 text-sm sm:text-base">
            <span className="text-[#6a9955] shrink-0 font-mono text-base sm:text-lg mr-3">5</span>
            <span className="text-[#6a9955]">/**</span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * 3 years of Experience as Software developer and
              automation Quality
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * Analyst with strong skills in object-oriented
              programming, REST API
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * Integration with JavaScript in Node JS, SQL in
              real world projects.
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * Certified AWS Cloud Solution Architect with
              hands-on experience.
            </span>
          </div>
          <div className="mb-4 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * Knowledge of AI/ML algorithms integration with
              WebApp development.
            </span>
          </div>
          <div className="mb-4 text-sm sm:text-base">
            <span className="text-[#6a9955] shrink-0 font-mono text-base sm:text-lg mr-3">6</span>
            <span className="text-[#6a9955]"> */</span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="mb-4 text-sm sm:text-base">
            <span className="text-[#6a9955] shrink-0 font-mono text-base sm:text-lg mr-3">7</span>
            <span className="text-[#dcdcaa]">const</span>
            <span className="text-[#4fc1ff] ml-2">skills</span>
            <span className="text-[#d4d4d4] ml-2">=</span>
            <span className="text-[#d4d4d4] ml-2">{"{"}</span>
          </div>

          <div className="ml-6 sm:ml-10 space-y-4 sm:space-y-5">
            <div>
              <div className="mb-3">
                <span className="text-[#9cdcfe] text-sm sm:text-base">
                  languages:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 sm:gap-3 mb-3">
                {["Python", "Java", "SQL", "JavaScript"].map(
                  (skill, i) => (
                    <span
                      key={i}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-sm sm:text-base"
                    >
                      "{skill}"
                    </span>
                  ),
                )}
              </div>
              <div>
                <span className="text-[#d4d4d4] ml-6 sm:ml-12">],</span>
              </div>
            </div>

            <div>
              <div className="mb-3">
                <span className="text-[#9cdcfe] text-sm sm:text-base">
                  backendCloud:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 sm:gap-3 mb-3">
                {[
                  "Node.js",
                  "Express.js",
                  "GraphQL",
                  "REST APIs",
                  "AWS",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-sm sm:text-base"
                  >
                    "{skill}"
                  </span>
                ))}
              </div>
              <div>
                <span className="text-[#d4d4d4] ml-6 sm:ml-12">],</span>
              </div>
            </div>

            <div>
              <div className="mb-3">
                <span className="text-[#9cdcfe] text-sm sm:text-base">
                  databases:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 sm:gap-3 mb-3">
                {[
                  "MongoDB",
                  "Oracle DB",
                  "PostgreSQL",
                  "MySQL",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-sm sm:text-base"
                  >
                    "{skill}"
                  </span>
                ))}
              </div>
              <div>
                <span className="text-[#d4d4d4] ml-6 sm:ml-12">],</span>
              </div>
            </div>

            <div>
              <div className="mb-3">
                <span className="text-[#9cdcfe] text-sm sm:text-base">
                  testing:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 sm:gap-3 mb-3">
                {[
                  "ALM",
                  "JIRA",
                  "Postman",
                  "Azure DevOps",
                  "Selenium",
                  "Robot Framework",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-sm sm:text-base"
                  >
                    "{skill}"
                  </span>
                ))}
              </div>
              <div>
                <span className="text-[#d4d4d4] ml-6 sm:ml-12">],</span>
              </div>
            </div>

            <div>
              <div className="mb-3">
                <span className="text-[#9cdcfe] text-sm sm:text-base">
                  aiAutomation:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 sm:gap-3 mb-3">
                {[
                  "LLM APIs",
                  "Python AI Agents",
                  "Data Pipelines",
                  "Feature Engineering",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-sm sm:text-base"
                  >
                    "{skill}"
                  </span>
                ))}
              </div>
              <div>
                <span className="text-[#d4d4d4] ml-6 sm:ml-12">],</span>
              </div>
            </div>

            <div>
              <div className="mb-3">
                <span className="text-[#9cdcfe] text-sm sm:text-base">
                  devOps:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 sm:gap-3 mb-3">
                {[
                  "Docker",
                  "Kubernetes",
                  "CI/CD",
                  "GitHub Actions",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-sm sm:text-base"
                  >
                    "{skill}"
                  </span>
                ))}
              </div>
              <div>
                <span className="text-[#d4d4d4] ml-6 sm:ml-12">]</span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm sm:text-base">
            <span className="text-[#6a9955] shrink-0 font-mono text-base sm:text-lg mr-3">8</span>
            <span className="text-[#d4d4d4]">{"}"}</span>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-5 sm:p-6 md:p-8">
          <div className="mb-4 text-sm sm:text-base">
            <span className="text-[#6a9955] shrink-0 font-mono text-base sm:text-lg mr-3">9</span>
            <span className="text-[#6a9955]">
              // Connect with me
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
            <a
              href="mailto:henisnakrani01@gmail.com"
              className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-[#0e639c] hover:bg-[#1177bb] rounded transition-colors text-sm sm:text-base"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span className="truncate">
                henisnakrani01@gmail.com
              </span>
            </a>
            <a
              href="tel:+13658830562"
              className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-[#3e3e42] hover:bg-[#4e4e52] rounded transition-colors text-sm sm:text-base"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span className="text-sm sm:text-base">(365) 883-0562</span>
            </a>
            <a
              href="https://github.com/Henis1729"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-[#3e3e42] hover:bg-[#4e4e52] rounded transition-colors text-sm sm:text-base"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/henis-nakrani/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-5 py-3 bg-[#3e3e42] hover:bg-[#4e4e52] rounded transition-colors text-sm sm:text-base"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
