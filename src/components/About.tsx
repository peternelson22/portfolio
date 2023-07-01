'use client';

import { motion } from 'framer-motion';

type Props = {};
const About = (props: Props) => {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-2xl text-gray-500'>
        About
      </h3>
      <div className='space-y-6 px-0 md:px-10 flex flex-col text-center md:text-left md:flex-row items-center'>
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src='/cole.jpg'
          className='-mb-10 md:mb-0 mt-32 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-80 md:w-64 xl:w-[400px] xl:h-[400px] md:px-8'
        />
        <div className="md:flex-col  pt-6">

        <h4 className='text-2xl md:text-4xl font-semibold mb-2 md:mb-6 whitespace-nowrap'>A little background</h4>
        <p className='text-base  text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          debitis. Est a sunt iusto hic cum explicabo temporibus eaque cumque
          magnam ab et eveniet quas modi minus ipsa, consequatur delectus
          reprehenderit fuga quis illo neque. Dolor at molestiae possimus unde
          laboriosam magnam dignissimos aliquid. Repellendus suscipit earum
        </p>
        </div>
      </div>
    </div>
  );
};
export default About;
