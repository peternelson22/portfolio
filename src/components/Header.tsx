'use client';

import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

type Props = {};
const Header = (props: Props) => {
  return (
    <header className='flex items-start xl:items-center p-5 sticky top-0 justify-between max-w-7xl mx-auto z-20'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'
      >
        <SocialIcon
          url='https://github.com/peternelson22'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://github.com/peternelson22'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://github.com/peternelson22'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center cursor-pointer text-gray-300'
      >
        <SocialIcon
          network='email'
          fgColor='gray'
          bgColor='transparent'
          className='cursor-pointer'
        />
        <p className='hidden md:inline-flex uppercase text-sm text-gray-400'>
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};
export default Header;
