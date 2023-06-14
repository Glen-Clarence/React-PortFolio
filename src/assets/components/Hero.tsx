// import Button from "./Button";
import Heading from "./Heading";
// import { Link } from "react-router-dom";
import Arrow from "../img/arrow.png";
import { MyBubblyLink } from "./AnimateLink";
// import { BubblyLink } from "react-bubbly-transitions";
import { SplitText } from "@cyriacbr/react-split-text";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const heroText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroChild =
      heroText.current?.firstElementChild?.children[0].children[0].children[0];
    console.log(heroChild);
    const ctx = gsap.context(() => {
      gsap.from(heroText.current, {
        duration: 0.3,
        y: 50,
        stagger: 1,
      });
    });
    return () => ctx.revert();
  });
  return (
    <div>
      <div ref={heroText} className="flex container gap-10 relative">
        <Heading
          size="text-lg md:text-6xl 2xl:text-8xl"
          bold
          className=" mt-24 md:mt-40 Heading md:leading-[1.2] 2xl:leading-[7rem]  font-rubik tracking-wide cursor-pointer"
        >
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <SplitText>
            Hey, I’m Glen Clarence. A UX/UI Engineer with 2 years of experience.{" "}
          </SplitText>
        </Heading>
      </div>
      <div className="container md:flex md:justify-between md:items-end">
        <Heading
          size="text-base"
          bold={false}
          className=" md:w-[40%] md:leading-[2.5rem] md:mt-36 mt-14 md:text-2xl font-rubik tracking-wider text-slate-800 leading-subHeading"
        >
          <span>
            I’m constantly learning and growing, I’m confident in my ability to
            create engaging and user-friendly designs.
          </span>
        </Heading>
        <div className="mt-12 flex justify-end font-rubik relative">
          <div className="absolute top-[-50px] md:-top-[110px] -right-[15px]">
            <img src={Arrow} alt="Arrow" />
          </div>
          <MyBubblyLink
            // className='bg-button-primary text-white text-4xl px-3 py-3  font-medium'
            to="/about"
          >
            <span className="bg-button-primary text-white text-4xl px-3 py-3  font-medium">
              About me
            </span>
          </MyBubblyLink>
          {/* <Button >
            
            <Link to={"/about"}>About me</Link>
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
