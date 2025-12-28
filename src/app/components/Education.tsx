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
    <div className="min-h-[calc(100vh-8rem)] bg-[#1e1e1e] p-8 font-['Fira_Code']">
      <div className="max-w-5xl mx-auto">
        {/* JSON Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#6a9955]">1</span>
            <span className="text-[#d4d4d4]">{'{'}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#6a9955]">2</span>
            <span className="text-[#9cdcfe] ml-4">"education":</span>
            <span className="text-[#d4d4d4] ml-2">[</span>
          </div>
        </div>

        {/* Education Items */}
        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="bg-[#252526] border border-[#3e3e42] rounded-lg p-6">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#6a9955]">{3 + index * 14}</span>
                  <span className="text-[#d4d4d4] ml-4">{'{'}</span>
                </div>

                <div className="ml-8 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#6a9955]">{4 + index * 14}</span>
                    <span className="text-[#9cdcfe] ml-4">"degree":</span>
                    <span className="text-[#ce9178] ml-2">"{item.degree}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  {item.specialization && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#6a9955]">{5 + index * 14}</span>
                      <span className="text-[#9cdcfe] ml-4">"specialization":</span>
                      <span className="text-[#ce9178] ml-2">"{item.specialization}"</span>
                      <span className="text-[#d4d4d4]">,</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <span className="text-[#6a9955]">{6 + index * 14}</span>
                    <span className="text-[#9cdcfe] ml-4">"school":</span>
                    <span className="text-[#ce9178] ml-2">"{item.school}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#6a9955]">{7 + index * 14}</span>
                    <span className="text-[#9cdcfe] ml-4">"location":</span>
                    <span className="text-[#ce9178] ml-2">"{item.location}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#6a9955]">{8 + index * 14}</span>
                    <span className="text-[#9cdcfe] ml-4">"period":</span>
                    <span className="text-[#ce9178] ml-2">"{item.period}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#6a9955]">{9 + index * 14}</span>
                    <span className="text-[#9cdcfe] ml-4">"gpa":</span>
                    <span className="text-[#ce9178] ml-2">"{item.gpa}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#6a9955]">{10 + index * 14}</span>
                    <span className="text-[#9cdcfe] ml-4">"description":</span>
                    <span className="text-[#ce9178] ml-2">"{item.description}"</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#6a9955]">{11 + index * 14}</span>
                  <span className="text-[#d4d4d4] ml-4">{'}'}</span>
                  {index < education.length - 1 && <span className="text-[#d4d4d4]">,</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* JSON Footer */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#6a9955]">{3 + education.length * 14}</span>
            <span className="text-[#d4d4d4] ml-4">]</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#6a9955]">{4 + education.length * 14}</span>
            <span className="text-[#d4d4d4]">{'}'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}