import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Comparison } from './components/Comparison';
import { Poets } from './components/Poets';
import { LanguageLab } from './components/LanguageLab';
import { Manifestos } from './components/Manifestos';
import { Conflicts } from './components/Conflicts';
import { Graph } from './components/Graph';
import { Glossary } from './components/Glossary';
import { Quiz } from './components/Quiz';
import { Quotes } from './components/Quotes';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { CityMap } from './components/CityMap';
import { PoemAnalysis } from './components/PoemAnalysis';
import { Texts } from './components/Texts';
import { Gallery } from './components/Gallery';
import { Analytics } from '@vercel/analytics/react';

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-0" style={{ overflow: 'hidden' }}>
      <svg width="100%" height="24" viewBox="0 0 1440 24" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="12" x2="560" y2="12" stroke="var(--c-border)" strokeWidth="1"/>
        <rect x="680" y="8" width="8" height="8" fill="#6C76F0" opacity="0.4" transform="rotate(45 684 12)"/>
        <rect x="700" y="9" width="6" height="6" fill="var(--c-border)" transform="rotate(45 703 12)"/>
        <rect x="718" y="10" width="4" height="4" fill="#6C76F0" opacity="0.25" transform="rotate(45 720 12)"/>
        <line x1="736" y1="12" x2="1440" y2="12" stroke="var(--c-border)" strokeWidth="1"/>
      </svg>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--c-bg)', color: 'var(--c-text)' }}>
      <NavBar />
      <Hero />
      <Timeline />
      <CityMap />
      <SectionDivider />
      <Comparison />
      <SectionDivider />
      <Poets />
      <LanguageLab />
      <PoemAnalysis />
      <Manifestos />
      <SectionDivider />
      <Conflicts />
      <SectionDivider />
      <Graph />
      <SectionDivider />
      <Glossary />
      <Quiz />
      <Quotes />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <Texts />
      <Footer />
      <Analytics />
    </div>
  );
}
