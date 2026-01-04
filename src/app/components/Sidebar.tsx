import { FileCode2, FileJson, FileType, ChevronDown, ChevronRight, Folder } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobile?: boolean;
}

export function Sidebar({ isOpen, activeTab, setActiveTab, isMobile = false }: SidebarProps) {
  const [explorerOpen, setExplorerOpen] = useState(true);

  const files = [
    { name: 'about.jsx', icon: FileCode2, color: 'text-[#61dafb]' },
    { name: 'education.json', icon: FileJson, color: 'text-[#cbcb41]' },
    { name: 'experience.ts', icon: FileType, color: 'text-[#3178c6]' },
    { name: 'projects.jsx', icon: FileCode2, color: 'text-[#61dafb]' },
    { name: 'certifications.json', icon: FileJson, color: 'text-[#cbcb41]' },
  ];

  if (!isOpen) return null;

  return (
    <aside className={`fixed left-0 top-12 sm:top-14 bottom-7 sm:bottom-8 w-64 sm:w-72 bg-[#252526] border-r border-[#1e1e1e] z-40 transition-transform duration-300 ${
      isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'
    }`}>
      <div className="p-3 sm:p-4">
        <button
          onClick={() => setExplorerOpen(!explorerOpen)}
          className="flex items-center gap-2 w-full px-3 py-2 hover:bg-[#2a2d2e] rounded text-[#cccccc] text-sm sm:text-base uppercase tracking-wide"
        >
          {explorerOpen ? (
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
          <span>Explorer</span>
        </button>
      </div>

      {explorerOpen && (
        <div className="px-3 sm:px-4">
          <div className="mb-3">
            <div className="flex items-center gap-2 px-3 py-2 text-[#cccccc] text-sm sm:text-base">
              <Folder className="w-5 h-5 sm:w-6 sm:h-6 text-[#dcb67a]" />
              <span>PORTFOLIO</span>
            </div>
          </div>

          <div className="space-y-1 ml-4 sm:ml-6">
            {files.map((file) => (
              <button
                key={file.name}
                onClick={() => setActiveTab(file.name)}
                className={`flex items-center gap-2 sm:gap-3 w-full px-3 py-2 sm:py-2.5 rounded text-sm sm:text-base transition-colors ${
                  activeTab === file.name
                    ? 'bg-[#37373d] text-white'
                    : 'text-[#cccccc] hover:bg-[#2a2d2e]'
                }`}
              >
                <file.icon className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${file.color}`} />
                <span className="truncate">{file.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
