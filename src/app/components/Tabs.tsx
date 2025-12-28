import { X, FileCode2, FileJson, FileType } from 'lucide-react';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabs = [
    { name: 'about.jsx', icon: FileCode2, color: 'text-[#61dafb]' },
    { name: 'education.json', icon: FileJson, color: 'text-[#cbcb41]' },
    { name: 'experience.ts', icon: FileType, color: 'text-[#3178c6]' },
    { name: 'projects.jsx', icon: FileCode2, color: 'text-[#61dafb]' },
    { name: 'certifications.json', icon: FileJson, color: 'text-[#cbcb41]' },
  ];

  return (
    <div className="flex items-center bg-[#252526] border-b border-[#1e1e1e] overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm border-r border-[#1e1e1e] transition-colors group shrink-0 ${
            activeTab === tab.name
              ? 'bg-[#1e1e1e] text-white border-t-2 border-t-[#3794ff]'
              : 'text-[#969696] hover:bg-[#2a2d2e]'
          }`}
        >
          <tab.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${tab.color}`} />
          <span className="truncate max-w-[120px] sm:max-w-none">{tab.name}</span>
          <X className="w-3 h-3 opacity-0 group-hover:opacity-100 hover:bg-[#3e3e42] rounded transition-opacity shrink-0 hidden sm:block" />
        </button>
      ))}
    </div>
  );
}
