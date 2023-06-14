import Hero from "../components/Hero";
import RecentWorks from "../components/RecentWorks";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { fadeIn } from "../components/Animtions";

const Home: React.FC = () => {
  const home = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeIn(home.current);
    });
    return () => ctx.revert();
  }, []);
  return (
    <div>
      <div ref={home}>
        <Hero />
        <RecentWorks showButton />
      </div>
    </div>
  );
};

export default Home;
