export function Education() {
  const education = [
    {
      degree: 'Master of Engineering in System and Technology',
      specialization: 'Automation and Smart System',
      school: 'McMaster University',
      location: 'Hamilton, ON',
      period: 'Sept 2023 - Sept 2025',
      gpa: '3.9/4.0',
      description: 'AI/ML algorithms integration, WebApp development, database architecture, Cloud services',
    },
    {
      degree: 'Bachelor of Engineering in Information Technology',
      specialization: '',
      school: 'L.D. College of Engineering',
      location: 'Gujarat, India',
      period: 'June 2018 - May 2022',
      gpa: '9.18/10.0',
      description: 'Strong foundation in software development and information technology',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[#1e1e1e] p-4 sm:p-6 md:p-8 lg:p-10 font-['Fira_Code']">
      <div className="max-w-5xl mx-auto">
        {/* JSON Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-3 text-sm sm:text-base">
            <span className="text-[#d4d4d4]">{'{'}</span>
          </div>
          <div className="flex items-center gap-3 mb-4 text-sm sm:text-base">
            <span className="text-[#9cdcfe] ml-4">"education":</span>
            <span className="text-[#d4d4d4] ml-2">[</span>
          </div>
        </div>

        {/* Education Items */}
        <div className="space-y-5 sm:space-y-6">
          {education.map((item, index) => (
            <div key={index} className="bg-[#252526] border border-[#3e3e42] rounded-lg p-5 sm:p-6">
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#d4d4d4] ml-2 sm:ml-4">{'{'}</span>
                </div>

                <div className="ml-6 sm:ml-10 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[#9cdcfe]">"degree":</span>
                    <span className="text-[#ce9178] ml-2 break-words">"{item.degree}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  {item.specialization && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[#9cdcfe]">"specialization":</span>
                      <span className="text-[#ce9178] ml-2 break-words">"{item.specialization}"</span>
                      <span className="text-[#d4d4d4]">,</span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[#9cdcfe]">"school":</span>
                    <span className="text-[#ce9178] ml-2 break-words">"{item.school}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[#9cdcfe]">"location":</span>
                    <span className="text-[#ce9178] ml-2">"{item.location}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[#9cdcfe]">"period":</span>
                    <span className="text-[#ce9178] ml-2">"{item.period}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[#9cdcfe]">"gpa":</span>
                    <span className="text-[#ce9178] ml-2">"{item.gpa}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[#9cdcfe]">"description":</span>
                    <span className="text-[#ce9178] ml-2 break-words">"{item.description}"</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#d4d4d4] ml-2 sm:ml-4">{'}'}</span>
                  {index < education.length - 1 && <span className="text-[#d4d4d4]">,</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* JSON Footer */}
        <div className="mt-6 sm:mt-8 text-sm sm:text-base">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[#d4d4d4] ml-4">]</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#d4d4d4]">{'}'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
