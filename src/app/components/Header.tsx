import { Menu, Search, Settings, FileCode2 } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-12 bg-[#323233] border-b border-[#1e1e1e] z-50 flex items-center px-2">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-2 hover:bg-[#2a2d2e] rounded transition-colors"
        aria-label="Toggle sidebar"
      >
        <Menu className="w-5 h-5 text-[#cccccc]" />
      </button>
      
      <div className="flex items-center gap-2 ml-2">
        <FileCode2 className="w-5 h-5 text-[#3794ff]" />
        <span className="text-sm text-[#cccccc]">Henis Nakrani - Portfolio - Visual Studio Code</span>
      </div>

      <div className="flex-1 max-w-xl mx-auto px-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#858585] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search (Ctrl+P)"
            className="w-full bg-[#3c3c3c] text-[#cccccc] text-sm pl-10 pr-4 py-1.5 rounded border border-transparent focus:border-[#007acc] focus:outline-none"
          />
        </div>
      </div>

      <button className="p-2 hover:bg-[#2a2d2e] rounded transition-colors">
        <Settings className="w-5 h-5 text-[#cccccc]" />
      </button>
    </header>
  );
}