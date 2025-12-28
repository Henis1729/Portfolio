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
    <aside className={`fixed left-0 top-12 bottom-6 w-64 bg-[#252526] border-r border-[#1e1e1e] z-40 transition-transform duration-300 ${
      isMobile && !isOpen ? '-translate-x-full' : 'translate-x-0'
    }`}>
      <div className="p-2">
        <button
          onClick={() => setExplorerOpen(!explorerOpen)}
          className="flex items-center gap-2 w-full px-2 py-1 hover:bg-[#2a2d2e] rounded text-[#cccccc] text-sm uppercase tracking-wide"
        >
          {explorerOpen ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
          <span>Explorer</span>
        </button>
      </div>

      {explorerOpen && (
        <div className="px-2">
          <div className="mb-2">
            <div className="flex items-center gap-2 px-2 py-1 text-[#cccccc] text-sm">
              <Folder className="w-4 h-4 text-[#dcb67a]" />
              <span>PORTFOLIO</span>
            </div>
          </div>

          <div className="space-y-0.5 ml-4">
            {files.map((file) => (
              <button
                key={file.name}
                onClick={() => setActiveTab(file.name)}
                className={`flex items-center gap-2 w-full px-2 py-1 rounded text-sm transition-colors ${
                  activeTab === file.name
                    ? 'bg-[#37373d] text-white'
                    : 'text-[#cccccc] hover:bg-[#2a2d2e]'
                }`}
              >
                <file.icon className={`w-4 h-4 shrink-0 ${file.color}`} />
                <span className="truncate">{file.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
