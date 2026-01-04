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
            <span className="text-[#6a9955] shrink-0 font-mono text-base sm:text-lg mr-3">4</span>
            <span className="text-[#6a9955]">/**</span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * Hello! Thanks for taking an interest to know about me!
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * 
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * A small side project predicting my own health data with ML is what changed my career.
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * It convinced me to move from SDE into machine learning and automation systems
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * and to pursue an M.Eng in Automation & Smart Systems so I can use ML and deep
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * learning to solve business problems.
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * 
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * I like turning messy, real‑world problems into robust ML models and automation
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * workflows by using Python and deep learning frameworks that run reliably in
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * cloud-based systems.
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * 
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * Recently, I have:
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * • Automated government workflows at Ontario's Ministry of Education using UFT,
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              *   VBScript, and ALM/Azure DevOps.
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * • Built serverless backends with AWS Lambda, API Gateway, and GraphQL at Scaleteam
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              *   Technology Pvt. Ltd.
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * • Developed predictive models for healthcare use cases using Python, scikit‑learn,
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              *   and deep learning frameworks.
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * 
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * I bring a rare mix of QA mindset, software engineering experience, and machine
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * learning skills, which helps me design systems that are not only accurate but also
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * observable, testable, and scalable in real environments.
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * I am an AWS Certified Solutions Architect and recently completed an M.Eng in
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * Automation & Smart Systems at McMaster University (GPA 3.9/4).
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * 
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * Currently Seeking: Machine Learning Engineer, Automation Engineer, or Data
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * Analyst roles where I can apply ML and automation expertise to solve actual problems.
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * 
            </span>
          </div>
          <div className="mb-2 text-sm sm:text-base">
            <span className="text-[#6a9955] ml-8 sm:ml-10 break-words">
              {" "}
              * Passionate about continuous learning and contributing to innovative tech communities!
            </span>
          </div>
          <div className="mb-4 text-sm sm:text-base">
            <span className="text-[#6a9955]"> */</span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="mb-4 text-sm sm:text-base">
            <span className="text-[#6a9955] shrink-0 font-mono text-base sm:text-lg mr-3">5</span>
            <span className="text-[#dcdcaa]">const</span>
            <span className="text-[#4fc1ff] ml-2">skills</span>
            <span className="text-[#d4d4d4] ml-2">=</span>
            <span className="text-[#d4d4d4] ml-2">{"{"}</span>
          </div>

          <div className="ml-6 sm:ml-10 space-y-4 sm:space-y-5">
            <div>
              <div className="mb-3">
                <span className="text-[#9cdcfe] text-sm sm:text-base">
                  mlAI:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 sm:gap-3 mb-3">
                {[
                  "TensorFlow",
                  "PyTorch",
                  "Keras",
                  "scikit-learn",
                  "Classification Models",
                  "Neural Networks",
                  "Feature Engineering",
                  "SMOTE",
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
                  automationQA:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 sm:gap-3 mb-3">
                {[
                  "Python Scripting",
                  "UFT",
                  "VBScript",
                  "ALM",
                  "Azure DevOps",
                  "Test Automation",
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
                  backendCloud:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 sm:gap-3 mb-3">
                {[
                  "AWS (EC2, Lambda, S3)",
                  "API Gateway",
                  "Node.js",
                  "GraphQL",
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
                  dataAnalytics:
                </span>
                <span className="text-[#d4d4d4] ml-2">[</span>
              </div>
              <div className="ml-6 sm:ml-12 flex flex-wrap gap-2 sm:gap-3 mb-3">
                {[
                  "Data Cleaning",
                  "Data Mining",
                  "Statistical Analysis",
                  "Pandas",
                  "NumPy",
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
                  "SQL",
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
            <span className="text-[#d4d4d4]">{"}"}</span>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-5 sm:p-6 md:p-8">
          <div className="mb-4 text-sm sm:text-base">
            <span className="text-[#6a9955] shrink-0 font-mono text-base sm:text-lg mr-3">6</span>
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
