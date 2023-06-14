import Heading from "../components/Heading";

import { MouseEvent, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { fadeIn } from "../components/Animtions";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import image1 from "../img/About.jpg";
import image2 from "../img/Adevnturer.png";
import image3 from "../img/desktop.png";
import Button from "../components/Button";

const Work: React.FC = () => {
  const mm = gsap.matchMedia();
  const recentWorks = [
    { work: "Adventure", domain: "Design & Development", img: image1 },
    { work: "TaskTracker", domain: "Design & Development", img: image2 },
    { work: "NetProffiter", domain: "Design & Development", img: image3 },
  ];
  const work = useRef<HTMLDivElement>(null);

  const handleHover = (e: MouseEvent) => {
    mm.add("(min-width: 1200px)", () => {
      gsap.to(e.currentTarget.children[0], {
        x: "-30vw",
        duration: 0.2,
      });
      gsap.to(e.currentTarget.children[1], {
        duration: 0.2,
        css: {
          right: "0vw",
        },
      });
      gsap.to(e.currentTarget.children[2], {
        duration: 0.2,
        css: {
          right: "35vw",
        },
      });
    });
  };
  const handleMouseHover = (e: MouseEvent) => {
    mm.add("(min-width: 1200px)", () => {
      gsap.to(e.currentTarget.children[0], {
        x: 0,
        duration: 0.2,
        ease: "power2.in",
      });
      gsap.to([e.currentTarget.children[1], e.currentTarget.children[2]], {
        duration: 0.2,
        css: {
          right: "-100%",
          ease: "power2.in",
        },
      });
    });
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeIn(work.current);
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={work}>
      <div className="container">
        <div className="h-[45vh] flex justify-start items-end">
          <Heading
            size="text-xl"
            bold
            className=" md:w-[60%] md:leading-[1.3]  md:text-6xl h-fit font-rubik tracking-wider"
          >
            <span>Innovative solutions for modern challenges</span>
          </Heading>
        </div>
        <div className="flex gap-5 ">
          <Button className="text-xl mt-4 px-4 py-2  bg-button-primary w-fit text-white font-rubik ">
            Projects
          </Button>
          <Button className="text-xl mt-4 px-4 py-2 border border-button-primary  w-fit text-black font-rubik ">
            Design
          </Button>
          <Button className="text-xl mt-4 px-4 py-2 border border-button-primary w-fit text-black font-rubik ">
            Development
          </Button>
        </div>
      </div>
      <div className="container mt-16 mb-16">
        {recentWorks.map((recent, index) => (
          <div
            key={index}
            className="border-t border-button-primary last:border-b py-6"
          >
            <Link to={`/work/${index + 1}`} key={index}>
              <Projects
                handleHover={handleHover}
                handleMouseHover={handleMouseHover}
                work={recent.work}
                domain={recent.domain}
                image={recent.img}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
