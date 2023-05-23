import Heading from "../components/Heading";
import RecentWorks from "../components/RecentWorks";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { fadeIn } from "../components/Animtions";
const Work: React.FC = () => {
  const work = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeIn(work.current);
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={work}>
      <div className='container'>
        <Heading
          size='text-xl'
          bold
          className=' mt-14 md:w-[60%] md:leading-[1.3] md:mt-20 md:text-6xl font-stellaNova tracking-wider'
          headerText='Innovative solutions for modern challenges'
        />
      </div>
      <RecentWorks showButton={false} />
    </div>
  );
};

export default Work;
