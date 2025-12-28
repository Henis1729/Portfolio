import {
  Terminal,
  Code2,
  Database,
  Globe,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function About() {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[#1e1e1e] p-8 font-['Fira_Code']">
      <div className="max-w-5xl mx-auto">
        {/* Code Editor Style */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[#608b4e] mb-2">
            <span className="text-[#6a9955]">1</span>
            <span>// Portfolio Component</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#6a9955]">2</span>
            <span className="text-[#c586c0]">import</span>
            <span className="text-[#4ec9b0]">Developer</span>
            <span className="text-[#c586c0]">from</span>
            <span className="text-[#ce9178]">
              './henis-nakrani'
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-8 mb-6">
          <div className="flex items-start gap-6">
            {/* <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-[#3794ff] to-[#c586c0] flex items-center justify-center text-4xl text-white shrink-0">
              HN
            </div> */}
            <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-[#3794ff] to-[#c586c0] flex items-center justify-center text-4xl text-white shrink-0">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Nature"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <span className="text-[#6a9955]">3</span>
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

              <div className="ml-8 space-y-2 mb-4">
                <div>
                  <span className="text-[#6a9955]">4</span>
                  <span className="text-[#9cdcfe] ml-4">
                    name:
                  </span>
                  <span className="text-[#ce9178] ml-2">
                    "Henis Nakrani"
                  </span>
                  <span className="text-[#d4d4d4]">,</span>
                </div>
                <div>
                  <span className="text-[#6a9955]">5</span>
                  <span className="text-[#9cdcfe] ml-4">
                    role:
                  </span>
                  <span className="text-[#ce9178] ml-2">
                    "Software Developer & Automation QA"
                  </span>
                  <span className="text-[#d4d4d4]">,</span>
                </div>
                <div>
                  <span className="text-[#6a9955]">6</span>
                  <span className="text-[#9cdcfe] ml-4">
                    location:
                  </span>
                  <span className="text-[#ce9178] ml-2">
                    "Canada"
                  </span>
                  <span className="text-[#d4d4d4]">,</span>
                </div>
                <div>
                  <span className="text-[#6a9955]">7</span>
                  <span className="text-[#9cdcfe] ml-4">
                    experience:
                  </span>
                  <span className="text-[#b5cea8] ml-2">3</span>
                  <span className="text-[#d4d4d4]">,</span>
                  <span className="text-[#6a9955] ml-2">
                    // years
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-[#6a9955]">8</span>
                <span className="text-[#d4d4d4] ml-2">
                  {"}"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-8 mb-6">
          <div className="mb-4">
            <span className="text-[#6a9955]">9</span>
          </div>
          <div className="mb-2">
            <span className="text-[#6a9955]">10</span>
            <span className="text-[#6a9955] ml-2">/**</span>
          </div>
          <div className="mb-2">
            <span className="text-[#6a9955]">11</span>
            <span className="text-[#6a9955] ml-2">
              {" "}
              * 3 years of Experience as Software developer and
              automation Quality
            </span>
          </div>
          <div className="mb-2">
            <span className="text-[#6a9955]">12</span>
            <span className="text-[#6a9955] ml-2">
              {" "}
              * Analyst with strong skills in object-oriented
              programming, REST API
            </span>
          </div>
          <div className="mb-2">
            <span className="text-[#6a9955]">13</span>
            <span className="text-[#6a9955] ml-2">
              {" "}
              * Integration with JavaScript in Node JS, SQL in
              real world projects.
            </span>
          </div>
          <div className="mb-2">
            <span className="text-[#6a9955]">14</span>
            <span className="text-[#6a9955] ml-2">
              {" "}
              * Certified AWS Cloud Solution Architect with
              hands-on experience.
            </span>
          </div>
          <div className="mb-2">
            <span className="text-[#6a9955]">15</span>
            <span className="text-[#6a9955] ml-2">
              {" "}
              * Knowledge of AI/ML algorithms integration with
              WebApp development.
            </span>
          </div>
          <div className="mb-4">
            <span className="text-[#6a9955]">16</span>
            <span className="text-[#6a9955] ml-2"> */</span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-8 mb-6">
          <div className="mb-4">
            <span className="text-[#6a9955]">17</span>
            <span className="text-[#dcdcaa] ml-2">const</span>
            <span className="text-[#4fc1ff] ml-2">skills</span>
            <span className="text-[#d4d4d4] ml-2">=</span>
            <span className="text-[#d4d4d4] ml-2">{"{"}</span>
          </div>

          <div className="ml-8 space-y-4">
            <div>
              <div className="mb-2">
                <span className="text-[#6a9955]">18</span>
                <span className="text-[#9cdcfe] ml-4">
                  languages:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-12 flex flex-wrap gap-2 mb-2">
                {["Python", "Java", "SQL", "JavaScript"].map(
                  (skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-sm"
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
              <div className="ml-12 flex flex-wrap gap-2 mb-2">
                {[
                  "Node.js",
                  "Express.js",
                  "GraphQL",
                  "REST APIs",
                  "AWS",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-sm"
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
              <div className="ml-12 flex flex-wrap gap-2 mb-2">
                {[
                  "MongoDB",
                  "Oracle DB",
                  "PostgreSQL",
                  "MySQL",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-sm"
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
              <div className="ml-12 flex flex-wrap gap-2 mb-2">
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
                    className="px-3 py-1 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-sm"
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
              <div className="ml-12 flex flex-wrap gap-2 mb-2">
                {[
                  "LLM APIs",
                  "Python AI Agents",
                  "Data Pipelines",
                  "Feature Engineering",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-sm"
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
              <div className="ml-12 flex flex-wrap gap-2 mb-2">
                {[
                  "Docker",
                  "Kubernetes",
                  "CI/CD",
                  "GitHub Actions",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-sm"
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
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-8">
          <div className="mb-4">
            <span className="text-[#6a9955]">31</span>
          </div>
          <div className="mb-4">
            <span className="text-[#6a9955]">32</span>
            <span className="text-[#6a9955] ml-2">
              // Connect with me
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <a
              href="mailto:henisnakrani01@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-[#0e639c] hover:bg-[#1177bb] rounded transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">
                henisnakrani01@gmail.com
              </span>
            </a>
            <a
              href="tel:+13658830562"
              className="flex items-center gap-2 px-4 py-2 bg-[#3e3e42] hover:bg-[#4e4e52] rounded transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(365) 883-0562</span>
            </a>
            <a
              href="https://github.com/henisnakrani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#3e3e42] hover:bg-[#4e4e52] rounded transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/henis-nakrani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#3e3e42] hover:bg-[#4e4e52] rounded transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}