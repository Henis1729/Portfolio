import { Menu, Search, Settings, FileCode2 } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-12 sm:h-14 bg-[#323233] border-b border-[#1e1e1e] z-50 flex items-center px-3 sm:px-4 gap-2 sm:gap-3">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-2 sm:p-2.5 hover:bg-[#2a2d2e] rounded transition-colors shrink-0"
        aria-label="Toggle sidebar"
      >
        <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#cccccc]" />
      </button>
      
      <div className="flex items-center gap-2 sm:gap-3 min-w-0 shrink">
        <FileCode2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#3794ff] shrink-0" />
        <span className="text-sm sm:text-base text-[#cccccc] truncate hidden sm:inline">
          Henis Nakrani - Portfolio - Visual Studio Code
        </span>
        <span className="text-sm text-[#cccccc] truncate sm:hidden">
          Portfolio
        </span>
      </div>

      <div className="flex-1 max-w-xs sm:max-w-xl mx-auto px-2 sm:px-4 min-w-0">
        <div className="relative">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#858585] absolute left-2 sm:left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search (Ctrl+P)"
            className="w-full bg-[#3c3c3c] text-[#cccccc] text-sm sm:text-base pl-8 sm:pl-10 pr-2 sm:pr-4 py-2 sm:py-2.5 rounded border border-transparent focus:border-[#007acc] focus:outline-none"
          />
        </div>
      </div>

      <button className="p-2 sm:p-2.5 hover:bg-[#2a2d2e] rounded transition-colors shrink-0">
        <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-[#cccccc]" />
      </button>
    </header>
  );
}