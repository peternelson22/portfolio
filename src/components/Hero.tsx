'use client';

//import { Typewriter } from 'react-simple-typewriter';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};
const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      "Hello, I'm Nelson Tanko",
      'A Super Engineer',
      'BACKEND, FRONTEND, EVERYWHERE!!!',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <BackgroundCircles/>
      <h2>
        <span>{text}</span>
        <Cursor cursorColor='teal' />
      </h2>
    </div>
  );
};
export default Hero;
