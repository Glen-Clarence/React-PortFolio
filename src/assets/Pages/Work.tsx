import Heading from "../components/Heading";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { fadeIn } from "../components/Animtions";
import Projects from "./Projects";
import { Link } from "react-router-dom";
const Work: React.FC = () => {
  const work = useRef<HTMLDivElement>(null);
  const recentWorks = [
    { work: "Adventure", domain: "Design & Development" },
    { work: "TaskTracker", domain: "Design & Development" },
    { work: "NetProffiter", domain: "Design & Development" },
  ];
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
          className=' mt-14 md:w-[60%] md:leading-[1.3] md:mt-20 md:text-6xl font-rubik tracking-wider'
          headerText='Innovative solutions for modern challenges'
        />
      </div>
      <div className='container'>
        {recentWorks.map((recent, index) => (
          <Link to={`/work/${index + 1}`} key={index}>
            <Projects work={recent.work} domain={recent.domain} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
