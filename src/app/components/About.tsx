import {
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export function About() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[#1e1e1e] p-4 sm:p-6 md:p-8 font-['Fira_Code']">
      <div className="max-w-5xl mx-auto">
        {/* Code Editor Style */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center gap-2 text-[#608b4e] mb-2 text-xs sm:text-sm">
            <span className="text-[#6a9955] shrink-0">1</span>
            <span className="break-words">// Portfolio Component</span>
          </div>
          <div className="flex items-center gap-2 mb-4 text-xs sm:text-sm flex-wrap">
            <span className="text-[#6a9955] shrink-0">2</span>
            <span className="text-[#c586c0]">import</span>
            <span className="text-[#4ec9b0]">Developer</span>
            <span className="text-[#c586c0]">from</span>
            <span className="text-[#ce9178] break-all">
              './henis-nakrani'
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg bg-gradient-to-br from-[#3794ff] to-[#c586c0] flex items-center justify-center text-2xl sm:text-4xl text-white shrink-0 overflow-hidden">
              <img
                src="/Photo.JPG"
                alt="Henis Nakrani"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="mb-4 text-xs sm:text-sm">
                <span className="text-[#6a9955] shrink-0">3</span>
                <span className="text-[#dcdcaa] ml-2">
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

              <div className="ml-4 sm:ml-8 space-y-2 mb-4 text-xs sm:text-sm">
                <div className="flex flex-wrap items-center gap-1">
                  <span className="text-[#6a9955] shrink-0">4</span>
                  <span className="text-[#9cdcfe] ml-2 sm:ml-4">
                    name:
                  </span>
                  <span className="text-[#ce9178] ml-2 break-words">
                    "Henis Sureshkumar Nakrani"
                  </span>
                  <span className="text-[#d4d4d4]">,</span>
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <span className="text-[#6a9955] shrink-0">5</span>
                  <span className="text-[#9cdcfe] ml-2 sm:ml-4">
                    role:
                  </span>
                  <span className="text-[#ce9178] ml-2 break-words">
                    "Machine Learning & Automation Engineer | Ex-SDE @ Scaleteam | Ex-Automation QA @ OPS | AWS Solutions Architect | M.Eng, McMaster University"
                  </span>
                  <span className="text-[#d4d4d4]">,</span>
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <span className="text-[#6a9955] shrink-0">6</span>
                  <span className="text-[#9cdcfe] ml-2 sm:ml-4">
                    location:
                  </span>
                  <span className="text-[#ce9178] ml-2">
                    "Canada"
                  </span>
                  <span className="text-[#d4d4d4]">,</span>
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <span className="text-[#6a9955] shrink-0">7</span>
                  <span className="text-[#9cdcfe] ml-2 sm:ml-4">
                    experience:
                  </span>
                  <span className="text-[#b5cea8] ml-2">3 Years </span>
                  <span className="text-[#d4d4d4]">,</span>
                </div>
              </div>

              <div className="mb-4 text-xs sm:text-sm">
                <span className="text-[#6a9955] shrink-0">8</span>
                <span className="text-[#d4d4d4] ml-2">
                  {"}"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
          <div className="mb-4 text-xs sm:text-sm">
            <span className="text-[#6a9955] shrink-0">9</span>
          </div>
          <div className="mb-2 text-xs sm:text-sm">
            <span className="text-[#6a9955] shrink-0">10</span>
            <span className="text-[#6a9955] ml-2">/**</span>
          </div>
          <div className="mb-2 text-xs sm:text-sm">
            <span className="text-[#6a9955] shrink-0">11</span>
            <span className="text-[#6a9955] ml-2 break-words">
              {" "}
              * 3 years of Experience as Software developer and
              automation Quality
            </span>
          </div>
          <div className="mb-2 text-xs sm:text-sm">
            <span className="text-[#6a9955] shrink-0">12</span>
            <span className="text-[#6a9955] ml-2 break-words">
              {" "}
              * Analyst with strong skills in object-oriented
              programming, REST API
            </span>
          </div>
          <div className="mb-2 text-xs sm:text-sm">
            <span className="text-[#6a9955] shrink-0">13</span>
            <span className="text-[#6a9955] ml-2 break-words">
              {" "}
              * Integration with JavaScript in Node JS, SQL in
              real world projects.
            </span>
          </div>
          <div className="mb-2 text-xs sm:text-sm">
            <span className="text-[#6a9955] shrink-0">14</span>
            <span className="text-[#6a9955] ml-2 break-words">
              {" "}
              * Certified AWS Cloud Solution Architect with
              hands-on experience.
            </span>
          </div>
          <div className="mb-2 text-xs sm:text-sm">
            <span className="text-[#6a9955] shrink-0">15</span>
            <span className="text-[#6a9955] ml-2 break-words">
              {" "}
              * Knowledge of AI/ML algorithms integration with
              WebApp development.
            </span>
          </div>
          <div className="mb-4 text-xs sm:text-sm">
            <span className="text-[#6a9955] shrink-0">16</span>
            <span className="text-[#6a9955] ml-2"> */</span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
          <div className="mb-4 text-xs sm:text-sm">
            <span className="text-[#6a9955] shrink-0">17</span>
            <span className="text-[#dcdcaa] ml-2">const</span>
            <span className="text-[#4fc1ff] ml-2">skills</span>
            <span className="text-[#d4d4d4] ml-2">=</span>
            <span className="text-[#d4d4d4] ml-2">{"{"}</span>
          </div>

          <div className="ml-4 sm:ml-8 space-y-3 sm:space-y-4">
            <div>
              <div className="mb-2">
                <span className="text-[#6a9955]">18</span>
                <span className="text-[#9cdcfe] ml-4">
                  languages:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 mb-2">
                {["Python", "Java", "SQL", "JavaScript"].map(
                  (skill, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-xs sm:text-sm"
                    >
                      "{skill}"
                    </span>
                  ),
                )}
              </div>
              <div>
                <span className="text-[#6a9955]">19</span>
                <span className="text-[#d4d4d4] ml-4">],</span>
              </div>
            </div>

            <div>
              <div className="mb-2">
                <span className="text-[#6a9955]">20</span>
                <span className="text-[#9cdcfe] ml-4">
                  backendCloud:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 mb-2">
                {[
                  "Node.js",
                  "Express.js",
                  "GraphQL",
                  "REST APIs",
                  "AWS",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-xs sm:text-sm"
                  >
                    "{skill}"
                  </span>
                ))}
              </div>
              <div>
                <span className="text-[#6a9955]">21</span>
                <span className="text-[#d4d4d4] ml-4">],</span>
              </div>
            </div>

            <div>
              <div className="mb-2">
                <span className="text-[#6a9955]">22</span>
                <span className="text-[#9cdcfe] ml-4">
                  databases:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 mb-2">
                {[
                  "MongoDB",
                  "Oracle DB",
                  "PostgreSQL",
                  "MySQL",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-xs sm:text-sm"
                  >
                    "{skill}"
                  </span>
                ))}
              </div>
              <div>
                <span className="text-[#6a9955]">23</span>
                <span className="text-[#d4d4d4] ml-4">],</span>
              </div>
            </div>

            <div>
              <div className="mb-2">
                <span className="text-[#6a9955]">24</span>
                <span className="text-[#9cdcfe] ml-4">
                  testing:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 mb-2">
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
                    className="px-2 sm:px-3 py-1 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-xs sm:text-sm"
                  >
                    "{skill}"
                  </span>
                ))}
              </div>
              <div>
                <span className="text-[#6a9955]">25</span>
                <span className="text-[#d4d4d4] ml-4">],</span>
              </div>
            </div>

            <div>
              <div className="mb-2">
                <span className="text-[#6a9955]">26</span>
                <span className="text-[#9cdcfe] ml-4">
                  aiAutomation:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 mb-2">
                {[
                  "LLM APIs",
                  "Python AI Agents",
                  "Data Pipelines",
                  "Feature Engineering",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-xs sm:text-sm"
                  >
                    "{skill}"
                  </span>
                ))}
              </div>
              <div>
                <span className="text-[#6a9955]">27</span>
                <span className="text-[#d4d4d4] ml-4">],</span>
              </div>
            </div>

            <div>
              <div className="mb-2">
                <span className="text-[#6a9955]">28</span>
                <span className="text-[#9cdcfe] ml-4">
                  devOps:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 mb-2">
                {[
                  "Docker",
                  "Kubernetes",
                  "CI/CD",
                  "GitHub Actions",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-xs sm:text-sm"
                  >
                    "{skill}"
                  </span>
                ))}
              </div>
              <div>
                <span className="text-[#6a9955]">29</span>
                <span className="text-[#d4d4d4] ml-4">]</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <span className="text-[#6a9955]">30</span>
            <span className="text-[#d4d4d4] ml-2">{"}"}</span>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-4 sm:p-6 md:p-8">
          <div className="mb-4 text-xs sm:text-sm">
            <span className="text-[#6a9955] shrink-0">31</span>
          </div>
          <div className="mb-4 text-xs sm:text-sm">
            <span className="text-[#6a9955] shrink-0">32</span>
            <span className="text-[#6a9955] ml-2">
              // Connect with me
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <a
              href="mailto:henisnakrani01@gmail.com"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#0e639c] hover:bg-[#1177bb] rounded transition-colors text-xs sm:text-sm"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span className="truncate">
                henisnakrani01@gmail.com
              </span>
            </a>
            <a
              href="tel:+13658830562"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#3e3e42] hover:bg-[#4e4e52] rounded transition-colors text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span className="text-xs sm:text-sm">(365) 883-0562</span>
            </a>
            <a
              href="https://github.com/henisnakrani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#3e3e42] hover:bg-[#4e4e52] rounded transition-colors text-xs sm:text-sm"
            >
              <Github className="w-4 h-4 shrink-0" />
              <span className="text-xs sm:text-sm">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/henis-nakrani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#3e3e42] hover:bg-[#4e4e52] rounded transition-colors text-xs sm:text-sm"
            >
              <Linkedin className="w-4 h-4 shrink-0" />
              <span className="text-xs sm:text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}