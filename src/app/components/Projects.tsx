import { ExternalLink, Github, Folder } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Association - Shared Accommodation Platform',
      description: 'Web platform that helps students find shared accommodations and roommates. Built with Node.js/Express Backend and React Frontend, featuring beautiful responsive UI and complete authentication system.',
      technologies: ['Node.js', 'Express.js', 'React', 'MongoDB', 'Vercel', 'CI/CD', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com',
      demo: 'https://example.com',
      status: 'Production',
      period: 'Sept 2025 - Present',
    },
    {
      title: 'AI Ticket Assistant',
      description: 'AI-Powered Support Ticket Management System leveraging LLM APIs for automatic ticket categorization and routing. Integrated LangChain agents for context-aware summarization and recommendations.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Inngest', 'Google Gemini API', 'React', 'LangChain'],
      github: 'https://github.com',
      demo: 'https://example.com',
      status: 'Active',
      period: 'Sept 2025',
    },
    {
      title: 'Booking Platform Test Automation',
      description: 'Data-driven automation framework using Robot Framework & Selenium, improving test coverage by 85%. Automated 20+ end-to-end scenarios reducing manual testing efforts by 70%.',
      technologies: ['Robot Framework', 'Selenium', 'Postman', 'SQL', 'GitHub Actions', 'Python'],
      github: 'https://github.com',
      demo: 'https://example.com',
      status: 'Production',
      period: 'Aug 2025',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[#1e1e1e] p-8 font-['Fira_Code']">
      <div className="max-w-6xl mx-auto">
        {/* JSX Header */}
        <div className="mb-6">
          <div className="mb-2">
            <span className="text-[#6a9955]">1</span>
            <span className="text-[#6a9955] ml-2">// My Projects Portfolio</span>
          </div>
          <div className="mb-2">
            <span className="text-[#6a9955]">2</span>
            <span className="text-[#c586c0] ml-2">export</span>
            <span className="text-[#c586c0] ml-2">function</span>
            <span className="text-[#dcdcaa] ml-2">Projects()</span>
            <span className="text-[#d4d4d4] ml-2">{'{'}</span>
          </div>
          <div className="mb-4">
            <span className="text-[#6a9955]">3</span>
            <span className="text-[#c586c0] ml-4">return</span>
            <span className="text-[#d4d4d4] ml-2">(</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 mb-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#252526] border border-[#3e3e42] rounded-lg p-6 hover:border-[#007acc] transition-colors group">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Folder className="w-6 h-6 text-[#dcb67a]" />
                  <div>
                    <h3 className="text-[#4ec9b0] text-lg">{project.title}</h3>
                    <span className="text-[#858585] text-xs">{project.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-xs ${
                    project.status === 'Production' ? 'bg-[#1a7f37] text-white' :
                    project.status === 'Beta' ? 'bg-[#bb8009] text-white' :
                    'bg-[#0e4429] text-[#7ee787]'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#9cdcfe] text-sm mb-4 leading-relaxed">
                <span className="text-[#6a9955]">// </span>
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="text-[#4ec9b0] text-sm mb-2">Tech Stack:</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#1e1e1e] border border-[#3e3e42] rounded text-[#ce9178] text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-[#3e3e42]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#9cdcfe] hover:text-[#3794ff] transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#9cdcfe] hover:text-[#3794ff] transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* JSX Footer */}
        <div>
          <div>
            <span className="text-[#6a9955]">{4 + projects.length}</span>
            <span className="text-[#d4d4d4] ml-4">);</span>
          </div>
          <div>
            <span className="text-[#6a9955]">{5 + projects.length}</span>
            <span className="text-[#d4d4d4] ml-2">{'}'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}