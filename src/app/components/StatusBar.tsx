import { GitBranch, AlertCircle, Bell, CheckCircle2 } from 'lucide-react';

interface StatusBarProps {
  activeTab: string;
}

export function StatusBar({ activeTab }: StatusBarProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-6 bg-[#007acc] flex items-center justify-between px-2 text-xs text-white z-50 overflow-hidden">
      <div className="flex items-center gap-2 sm:gap-4 min-w-0">
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <GitBranch className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="hidden sm:inline">main</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="hidden md:inline">0 Errors</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <AlertCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="hidden lg:inline">0 Warnings</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        <span className="hidden sm:inline">Ln 1, Col 1</span>
        <span className="hidden md:inline">UTF-8</span>
        <span className="text-[10px] sm:text-xs truncate max-w-[80px] sm:max-w-none">
          {activeTab.endsWith('.jsx') ? 'JSX' : 
           activeTab.endsWith('.ts') ? 'TS' : 
           activeTab.endsWith('.json') ? 'JSON' : 'Text'}
        </span>
        <Bell className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
      </div>
    </footer>
  );
}
