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
    <div className='snap-y snap-mandatory overflow-scroll z-0 h-screen '>
      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <Experience />

      <Skills />

      <Projects />

      <Contact />
    </div>
  );
}
