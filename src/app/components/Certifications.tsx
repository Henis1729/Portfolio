import { Award, CheckCircle2, Shield, Medal, Trophy } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-CSA-****',
      level: 'Professional',
      valid: true,
      category: 'Cloud',
    },
    {
      name: 'GATE (Graduate Aptitude Test in Engineering)',
      issuer: 'IIT Bombay',
      date: '2023',
      credentialId: 'GATE-****',
      level: 'Qualified',
      valid: true,
      category: 'Academic',
    },
    {
      name: 'Gold Medal - International Math Olympiad (IMO)',
      issuer: 'International Math Olympiad',
      date: '2017',
      credentialId: 'IMO-GOLD-****',
      level: 'Gold Medal',
      valid: true,
      category: 'Achievement',
    },
    {
      name: 'IELTS (International English Language Testing System)',
      issuer: 'British Council',
      date: '2023',
      credentialId: 'IELTS-****',
      level: 'Good Score',
      valid: true,
      category: 'Language',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-[#1e1e1e] p-4 sm:p-6 md:p-8 font-['Fira_Code']">
      <div className="max-w-5xl mx-auto">
        {/* JSON Header */}
        <div className="mb-4 sm:mb-6 text-xs sm:text-sm">
          <div className="mb-2">
            <span className="text-[#6a9955] shrink-0">1</span>
            <span className="text-[#d4d4d4] ml-2">{'{'}</span>
          </div>
          <div className="mb-4">
            <span className="text-[#6a9955] shrink-0">2</span>
            <span className="text-[#9cdcfe] ml-2 sm:ml-4">"certifications":</span>
            <span className="text-[#d4d4d4] ml-2">[</span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-[#252526] border border-[#3e3e42] rounded-lg p-4 sm:p-6 hover:border-[#007acc] transition-colors">
              <div className="space-y-2 text-xs sm:text-sm">
                {/* Opening Brace */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#6a9955] shrink-0">{3 + index * 12}</span>
                  <span className="text-[#d4d4d4] ml-2 sm:ml-4">{'{'}</span>
                </div>

                {/* Certificate Icon and Title */}
                <div className="flex items-start gap-2 sm:gap-3 ml-4 sm:ml-8 mb-3">
                  <div className="p-1.5 sm:p-2 bg-[#1e1e1e] rounded shrink-0">
                    {cert.category === 'Achievement' ? (
                      <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#f9c513]" />
                    ) : cert.category === 'Academic' ? (
                      <Medal className="w-4 h-4 sm:w-5 sm:h-5 text-[#3794ff]" />
                    ) : (
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#f9c513]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-[#4ec9b0] text-xs sm:text-sm leading-tight break-words">{cert.name}</span>
                      {cert.valid && <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7ee787] mt-0.5 shrink-0" />}
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="ml-4 sm:ml-8 space-y-2">
                  <div className="flex flex-wrap items-start gap-1">
                    <span className="text-[#6a9955] shrink-0">{4 + index * 12}</span>
                    <span className="text-[#9cdcfe] ml-2 sm:ml-4">"issuer":</span>
                    <span className="text-[#ce9178] ml-2 break-words">"{cert.issuer}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div className="flex flex-wrap items-start gap-1">
                    <span className="text-[#6a9955] shrink-0">{5 + index * 12}</span>
                    <span className="text-[#9cdcfe] ml-2 sm:ml-4">"date":</span>
                    <span className="text-[#ce9178] ml-2">"{cert.date}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div className="flex flex-wrap items-start gap-1">
                    <span className="text-[#6a9955] shrink-0">{6 + index * 12}</span>
                    <span className="text-[#9cdcfe] ml-2 sm:ml-4">"credentialId":</span>
                    <span className="text-[#ce9178] ml-2 break-words">"{cert.credentialId}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div className="flex flex-wrap items-start gap-1">
                    <span className="text-[#6a9955] shrink-0">{7 + index * 12}</span>
                    <span className="text-[#9cdcfe] ml-2 sm:ml-4">"level":</span>
                    <span className="text-[#ce9178] ml-2">"{cert.level}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div className="flex flex-wrap items-start gap-1">
                    <span className="text-[#6a9955] shrink-0">{8 + index * 12}</span>
                    <span className="text-[#9cdcfe] ml-2 sm:ml-4">"category":</span>
                    <span className="text-[#ce9178] ml-2">"{cert.category}"</span>
                    <span className="text-[#d4d4d4]">,</span>
                  </div>

                  <div className="flex flex-wrap items-start gap-1">
                    <span className="text-[#6a9955] shrink-0">{9 + index * 12}</span>
                    <span className="text-[#9cdcfe] ml-2 sm:ml-4">"valid":</span>
                    <span className="text-[#569cd6] ml-2">{cert.valid ? 'true' : 'false'}</span>
                  </div>
                </div>

                {/* Closing Brace */}
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-[#6a9955] shrink-0">{10 + index * 12}</span>
                  <span className="text-[#d4d4d4] ml-2 sm:ml-4">{'}'}</span>
                  {index < certifications.length - 1 && <span className="text-[#d4d4d4]">,</span>}
                </div>
              </div>

              {/* Verification Badge */}
              {cert.valid && (
                <div className="mt-3 pt-3 border-t border-[#3e3e42] flex items-center gap-2 text-xs text-[#7ee787]">
                  <Shield className="w-3 h-3 shrink-0" />
                  <span>Verified Credential</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* JSON Footer */}
        <div className="mt-4 sm:mt-6 text-xs sm:text-sm">
          <div className="mb-2">
            <span className="text-[#6a9955] shrink-0">{3 + certifications.length * 12}</span>
            <span className="text-[#d4d4d4] ml-2 sm:ml-4">]</span>
          </div>
          <div>
            <span className="text-[#6a9955] shrink-0">{4 + certifications.length * 12}</span>
            <span className="text-[#d4d4d4]">{'}'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}