import { GitBranch, AlertCircle, Bell, CheckCircle2 } from 'lucide-react';

interface StatusBarProps {
  activeTab: string;
}

export function StatusBar({ activeTab }: StatusBarProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-6 bg-[#007acc] flex items-center justify-between px-2 text-xs text-white z-50">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <GitBranch className="w-3.5 h-3.5" />
          <span>main</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>0 Errors</span>
        </div>
        <div className="flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>0 Warnings</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span>Ln 1, Col 1</span>
        <span>UTF-8</span>
        <span>
          {activeTab.endsWith('.jsx') ? 'JavaScript React' : 
           activeTab.endsWith('.ts') ? 'TypeScript' : 
           activeTab.endsWith('.json') ? 'JSON' : 'Text'}
        </span>
        <Bell className="w-3.5 h-3.5" />
      </div>
    </footer>
  );
}
