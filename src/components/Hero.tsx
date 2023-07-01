'use client';

//import { Typewriter } from 'react-simple-typewriter';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};
const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      "Hello, I'm Nelson Tanko",
      'A Super Engineer',
      'Backend Frontend Everywhere!!!',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        src='/icon.png'
        height={30}
        width={30}
        alt='me'
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 md:tracking-[15px] tracking-[8px] whitespace-nowrap'>
          Software Engineer
        </h2>
        <h1 className='text-lg  tracking-wider sm:text-4xl whitespace-nowrap font-semibold px-5 sm:px-10'>
          <span>{text}</span>
          <Cursor cursorColor='teal' />
        </h1>
        <div className='pt-5 whitespace-nowrap'>
          <Link href='#about'>
            <button className='hero-btn'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='hero-btn'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='hero-btn'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='hero-btn'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
