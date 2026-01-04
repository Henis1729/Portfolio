import { X, FileCode2, FileJson, FileType } from 'lucide-react';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openTabs: string[];
  setOpenTabs: (tabs: string[] | ((prev: string[]) => string[])) => void;
}

export function Tabs({ activeTab, setActiveTab, openTabs, setOpenTabs }: TabsProps) {
  const allTabs = [
    { name: 'about.jsx', icon: FileCode2, color: 'text-[#61dafb]' },
    { name: 'education.json', icon: FileJson, color: 'text-[#cbcb41]' },
    { name: 'experience.ts', icon: FileType, color: 'text-[#3178c6]' },
    { name: 'projects.jsx', icon: FileCode2, color: 'text-[#61dafb]' },
    { name: 'certifications.json', icon: FileJson, color: 'text-[#cbcb41]' },
  ];

  const handleCloseTab = (e: React.MouseEvent, tabName: string) => {
    e.stopPropagation();
    const newOpenTabs = openTabs.filter(tab => tab !== tabName);
    setOpenTabs(newOpenTabs);
    
    // If closing the active tab, switch to another open tab
    if (activeTab === tabName && newOpenTabs.length > 0) {
      setActiveTab(newOpenTabs[newOpenTabs.length - 1]);
    } else if (newOpenTabs.length === 0) {
      // If all tabs are closed, open the first one
      setOpenTabs(['about.jsx']);
      setActiveTab('about.jsx');
    }
  };

  return (
    <div className="flex items-center bg-[#252526] border-b border-[#1e1e1e] overflow-x-auto scrollbar-hide">
      {openTabs.map((tabName) => {
        const tab = allTabs.find(t => t.name === tabName);
        if (!tab) return null;
        
        return (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg border-r border-[#1e1e1e] transition-colors group shrink-0 ${
              activeTab === tab.name
                ? 'bg-[#1e1e1e] text-white border-t-2 border-t-[#3794ff]'
                : 'text-[#969696] hover:bg-[#2a2d2e]'
            }`}
          >
            <tab.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 shrink-0 ${tab.color}`} />
            <span className="truncate max-w-[100px] sm:max-w-[150px] md:max-w-none">{tab.name}</span>
            <X 
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 opacity-70 group-hover:opacity-100 hover:bg-[#3e3e42] rounded transition-opacity shrink-0 ml-1" 
              onClick={(e) => handleCloseTab(e, tab.name)}
            />
          </button>
        );
      })}
    </div>
  );
}
