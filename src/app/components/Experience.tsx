export function Experience() {
  const experiences = [
    {
      title: 'Automation Quality Assurance Analyst (Co-op)',
      company: 'Government of Ontario',
      department: 'Ministry of Public & Business Service Delivery & Procurement',
      location: 'Canada',
      period: 'April 2025',
      type: 'Co-op',
      responsibilities: [
        'Developed automation scripts for OSAP using VB Script and Python to simulate multiple scenarios',
        'Utilized ALM and Agile tools to log, track, and manage defects throughout testing lifecycle',
        'Used ALM and UFT to automate Smoke test and Sanity testing for financial institutions',
        'Performed rollover of scripts from 2024 to 2025 academic year for functional and regression testing',
      ],
    },
    {
      title: 'Software Development Engineer',
      company: 'Scaleteam Technology Pvt. Ltd.',
      department: '',
      location: 'India',
      period: 'Aug 2023',
      type: 'Full-time',
      responsibilities: [
        'Developed Frontend and Backend with JavaScript, Node.js with SQL Database and deployed on AWS Lambda',
        'Worked on multiple real world projects: MyFitnessWorld, Poly9 AI, Forevery Diamonds',
        'Integrated Third-party REST APIs with payment gateway infrastructure',
        'Learned Salesforce Platform concepts and developed scalable web and app based systems',
      ],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[#1e1e1e] p-8 font-['Fira_Code']">
      <div className="max-w-5xl mx-auto">
        {/* TypeScript Interface */}
        <div className="mb-6">
          <div className="mb-2">
            <span className="text-[#6a9955]">1</span>
            <span className="text-[#c586c0] ml-2">interface</span>
            <span className="text-[#4ec9b0] ml-2">Experience</span>
            <span className="text-[#d4d4d4] ml-2">{'{'}</span>
          </div>
          <div className="ml-8 space-y-1 mb-2">
            <div>
              <span className="text-[#6a9955]">2</span>
              <span className="text-[#9cdcfe] ml-4">title:</span>
              <span className="text-[#4ec9b0] ml-2">string</span>
              <span className="text-[#d4d4d4]">;</span>
            </div>
            <div>
              <span className="text-[#6a9955]">3</span>
              <span className="text-[#9cdcfe] ml-4">company:</span>
              <span className="text-[#4ec9b0] ml-2">string</span>
              <span className="text-[#d4d4d4]">;</span>
            </div>
            <div>
              <span className="text-[#6a9955]">4</span>
              <span className="text-[#9cdcfe] ml-4">period:</span>
              <span className="text-[#4ec9b0] ml-2">string</span>
              <span className="text-[#d4d4d4]">;</span>
            </div>
            <div>
              <span className="text-[#6a9955]">5</span>
              <span className="text-[#9cdcfe] ml-4">responsibilities:</span>
              <span className="text-[#4ec9b0] ml-2">string[]</span>
              <span className="text-[#d4d4d4]">;</span>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-[#6a9955]">6</span>
            <span className="text-[#d4d4d4] ml-2">{'}'}</span>
          </div>
          <div className="mb-4">
            <span className="text-[#6a9955]">7</span>
          </div>
          <div>
            <span className="text-[#6a9955]">8</span>
            <span className="text-[#dcdcaa] ml-2">const</span>
            <span className="text-[#4fc1ff] ml-2">workExperience:</span>
            <span className="text-[#4ec9b0] ml-2">Experience[]</span>
            <span className="text-[#d4d4d4] ml-2">=</span>
            <span className="text-[#d4d4d4] ml-2">[</span>
          </div>
        </div>

        {/* Experience Items */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#252526] border border-[#3e3e42] rounded-lg p-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#6a9955]">{9 + index * 18}</span>
                  <span className="text-[#d4d4d4] ml-4">{'{'}</span>
                </div>

                <div className="ml-8 space-y-3">
                  <div>
                    <span className="text-[#6a9955]">{10 + index * 18}</span>
                    <span className="text-[#9cdcfe] ml-4">title:</span>
                    <span className="text-[#ce9178] ml-2">"{exp.title}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div>
                    <span className="text-[#6a9955]">{11 + index * 18}</span>
                    <span className="text-[#9cdcfe] ml-4">company:</span>
                    <span className="text-[#ce9178] ml-2">"{exp.company}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  {exp.department && (
                    <div>
                      <span className="text-[#6a9955]">{12 + index * 18}</span>
                      <span className="text-[#9cdcfe] ml-4">department:</span>
                      <span className="text-[#ce9178] ml-2">"{exp.department}"</span>
                      <span className="text-[#d4d4d4]">,</span>
                    </div>
                  )}

                  <div>
                    <span className="text-[#6a9955]">{13 + index * 18}</span>
                    <span className="text-[#9cdcfe] ml-4">location:</span>
                    <span className="text-[#ce9178] ml-2">"{exp.location}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div>
                    <span className="text-[#6a9955]">{14 + index * 18}</span>
                    <span className="text-[#9cdcfe] ml-4">period:</span>
                    <span className="text-[#ce9178] ml-2">"{exp.period}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div>
                    <span className="text-[#6a9955]">{15 + index * 18}</span>
                    <span className="text-[#9cdcfe] ml-4">type:</span>
                    <span className="text-[#ce9178] ml-2">"{exp.type}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div className="mt-3">
                    <div>
                      <span className="text-[#6a9955]">{16 + index * 18}</span>
                      <span className="text-[#9cdcfe] ml-4">responsibilities:</span>
                      <span className="text-[#d4d4d4] ml-2">[</span>
                    </div>
                    <div className="ml-12 mt-2 space-y-1.5">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-[#6a9955]">{17 + index * 18 + i}</span>
                          <span className="text-[#ce9178]">"{resp}"</span>
                          {i < exp.responsibilities.length - 1 && <span className="text-[#d4d4d4]">,</span>}
                        </div>
                      ))}
                    </div>
                    <div>
                      <span className="text-[#6a9955]">{17 + index * 18 + exp.responsibilities.length}</span>
                      <span className="text-[#d4d4d4] ml-4">]</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#6a9955]">{18 + index * 18 + exp.responsibilities.length}</span>
                  <span className="text-[#d4d4d4] ml-4">{'}'}</span>
                  {index < experiences.length - 1 && <span className="text-[#d4d4d4]">,</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="mt-6">
          <span className="text-[#6a9955]">{9 + experiences.length * 18 + 12}</span>
          <span className="text-[#d4d4d4] ml-2">];</span>
        </div>
      </div>
    </div>
  );
}