import { MyBubblyLink } from "./AnimateLink";
import { useRef, useEffect } from "react";
import gsap from "gsap";
// import { Link } from "react-router-dom";

const Header = () => {
  const header = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(header.current);
    const ctx = gsap.context(() => {
      gsap.from(header.current, {
        y: -100,
        duration: 0.6,
        delay: 0.1,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className=" pb-4">
      <div ref={header} className="container  pt-5 ">
        <div className="flex justify-between relative items-end md:items-center">
          <div className="font-rubik">
            <MyBubblyLink to="/">
              <h2 className="text-left">Glen Clarence</h2>
              <h5 className="text-slate-600">UX/UI Engineer</h5>
            </MyBubblyLink>
          </div>
          <div className="hidden md:block font-rubik">
            <h2>Hubli</h2>
            <h5 className="text-slate-600">Karnataka</h5>
          </div>
          <div className="hidden md:block font-rubik">
            <h5 className="text-slate-600 cursor-alias">
              <a
                className="cursor-alias"
                href="mailto:glenclarence007@gmail.com"
              >
                glenclarence007@gmail.com
              </a>
            </h5>
          </div>
          <div className="">
            <h5 className="text-slate-600 font-rubik cursor-alias">
              <a
                className="cursor-alias"
                target="_blank"
                href="https://www.linkedin.com/in/glen-warrangal/"
              >
                Linkedin
              </a>
            </h5>
          </div>
          <div className="border-b-[3px] border-border-bg opacity-50 absolute -bottom-[8px] w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
