import { Header } from './components/Header';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { Tabs } from './components/Tabs';
import { StatusBar } from './components/StatusBar';
import { useState, useEffect } from 'react';
import { useIsMobile } from './components/ui/use-mobile';

export default function App() {
  const [activeTab, setActiveTab] = useState('about.jsx');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();

  // Close sidebar on mobile by default, open on desktop
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  // Close sidebar when clicking outside on mobile
  const handleOverlayClick = () => {
    if (isMobile && sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-['Inter']">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex pt-12 relative">
        {/* Overlay for mobile */}
        {isMobile && sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 top-12 bottom-6"
            onClick={handleOverlayClick}
            aria-hidden="true"
          />
        )}
        <Sidebar 
          isOpen={sidebarOpen} 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            if (isMobile) {
              setSidebarOpen(false);
            }
          }} 
          isMobile={isMobile} 
        />
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen && !isMobile ? 'md:ml-64' : 'ml-0'
        }`}>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="overflow-y-auto">
            <div className={activeTab === 'about.jsx' ? 'block' : 'hidden'}>
              <About />
            </div>
            <div className={activeTab === 'education.json' ? 'block' : 'hidden'}>
              <Education />
            </div>
            <div className={activeTab === 'experience.ts' ? 'block' : 'hidden'}>
              <Experience />
            </div>
            <div className={activeTab === 'projects.jsx' ? 'block' : 'hidden'}>
              <Projects />
            </div>
            <div className={activeTab === 'certifications.json' ? 'block' : 'hidden'}>
              <Certifications />
            </div>
          </div>
        </main>
      </div>
      <StatusBar activeTab={activeTab} />
    </div>
  );
}