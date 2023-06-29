import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id='hero'>
        <Hero />
      </section>
      {/* About */}
      <About />
      {/* Experience */}
      <Experience />
      {/* Skills */}
      <Skills />
      {/* Projects */}
      <Projects />
      {/* Contact Me */}
      <Contact />
    </main>
  );
}
