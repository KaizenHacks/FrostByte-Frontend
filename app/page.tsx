import FrostbyteScenery from '@/components/scenery/FrostbyteScenery';
import Snowfall from '@/components/Snowfall';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import EventFormat from '@/components/EventFormat';
import Tracks from '@/components/Tracks';
import Sponsors from '@/components/Sponsors';
import Community from '@/components/Community';
import Registration from '@/components/Registration';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* 4-Layer Pixel Art Parallax Scenery with Integrated FROSTBYTE Title */}
      <FrostbyteScenery />

      {/* Atmospheric Pixel Snowfall & Scroll-Velocity Wind Overlay */}
      <Snowfall />

      {/* Retro Navigation (Hides on scroll during transition, reappears for content) */}
      <Navbar />

      {/* 1. Opening Scenery Sequence Scroll Stage (~225vh duration) */}
      {/* Pure cinematic opening campsite sequence before website content begins */}
      <div
        id="hero"
        className="h-[260vh] w-full shrink-0 touch-pan-y"
        aria-label="FROSTBYTE Opening Experience"
      />

      {/* Main Website Sections (Beginning after the scenery sequence finishes) */}
      <main className="relative z-20 flex-1">
        <About />
        <EventFormat />
        <Tracks />
        <Sponsors />
        <Community />
        <Registration />
        <FAQ />
      </main>

      {/* Retro Footer */}
      <Footer />
    </>
  );
}
