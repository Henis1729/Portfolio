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
import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('about.jsx');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-['Inter']">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex pt-12">
        <Sidebar isOpen={sidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
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