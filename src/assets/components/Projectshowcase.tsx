import Heading from "./Heading";
import adventure from "../img/Adevnturer.png";
import desktop from "../img/desktop.png";
import desktopVedio from "../img/adventure-vedio.mp4";
import Arrow from "../img/arrow.png";
import adventureMenu from "../img/adventureMenu.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Projectshowcase: React.FC = () => {
  const { id } = useParams();
  const projectImage = useRef(null);
  console.log(id);

  useEffect(() => {
    const ctx = gsap.context(() => {
      console.log(projectImage.current);
      const growTl = gsap.timeline({
        scrollTrigger: {
          trigger: projectImage.current,
          scrub: 1.5,
          start: "top 60%",
          end: "+=600",
          // ease: "power3.inOut",
          // markers: true,
        },
      });
      growTl.to(projectImage.current, {
        duration: 1,
        scale: 1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {id === "1" && (
        <div className="pt-1" style={{ background: "#fce8ff" }}>
          <div className="container">
            <Heading
              size="text-xl"
              bold
              className=" mt-14 md:w-[60%] md:leading-[1.3] md:mt-20 md:text-6xl font-rubik tracking-wider"
            >
              <span>Adventurer</span>
            </Heading>
          </div>
          <div className="container mt-8 flex justify-between">
            <div className="font-rubik ">
              <h4 className="opacity-40 border-b-2 border-b-border-bg w-fit pb-4 text-xl">
                Role/Services
              </h4>
              <h5 className="mt-4 text-xl">Design & Development</h5>
            </div>
            <div className="relative">
              <div className="absolute top-[-50px] md:-top-[110px] -right-[15px]">
                <img src={Arrow} alt="Arrow" />
              </div>
              <button>
                <span className="bg-button-primary text-white text-4xl px-3 py-3  font-medium font-rubik ">
                  Live site
                </span>
              </button>
            </div>
          </div>
          <div className="container mt-12">
            <div className="">
              <img
                ref={projectImage}
                className="object-cover scale-90"
                src={adventure}
                alt="Project-One"
              />
            </div>
          </div>
          <div className="container mt-12 pb-12">
            <div className="relative">
              <div className='absolute top-[8px]  left-1/2 w-[79%] rounded-2xl overflow-hidden transform -translate-x-1/2 -translate-y-1/2"'>
                <video
                  className="object-cover w-full h-full"
                  src={desktopVedio}
                  loop
                  muted
                  autoPlay
                ></video>
              </div>
              <img className="object-cover" src={desktop} alt="Project-One" />
            </div>
          </div>
          <div className="container mt-12 pb-12 flex justify-center">
            <div className="w-[80%] rounded-2xl overflow-hidden">
              <video
                className="object-cover w-full h-full"
                src={adventureMenu}
                loop
                muted
                autoPlay
              ></video>
            </div>
          </div>
          <div className="container flex justify-center mt-12 pb-12">
            <Heading
              size="text-xl"
              bold
              className=" mt-14 md:w-[60%] md:leading-[1.3] md:mt-20 md:text-6xl font-rubik tracking-wider"
            >
              <span>Check out the design file</span>
            </Heading>
            {/* <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FYglGxASyd8bYbgcryNuFRF%2FTravel-Website%3Ftype%3Ddesign%26node-id%3D0%253A1%26t%3DFbVtkI3TB5YXIVQL-1"
              allowFullScreen
            ></iframe> */}
          </div>
        </div>
      )}
      {id === "2" && (
        <div className="pt-1" style={{ background: "#fce8ff" }}>
          <div className="container">
            <Heading
              size="text-xl"
              bold
              className=" mt-14 md:w-[60%] md:leading-[1.3] md:mt-20 md:text-6xl font-rubik tracking-wider"
            >
              <span>Task Trackker</span>
            </Heading>
          </div>
          <div className="container mt-8 flex justify-between">
            <div className="font-rubik ">
              <h4 className="opacity-40 border-b-2 border-b-border-bg w-fit pb-4 text-xl">
                Role/Services
              </h4>
              <h5 className="mt-4 text-xl">Design & Development</h5>
            </div>
            <div className="relative">
              <div className="absolute top-[-50px] md:-top-[110px] -right-[15px]">
                <img src={Arrow} alt="Arrow" />
              </div>
              <button>
                <span className="bg-button-primary text-white text-4xl px-3 py-3  font-medium font-rubik ">
                  Live site
                </span>
              </button>
            </div>
          </div>
          <div className="container mt-12">
            <div className="">
              <img
                ref={projectImage}
                className="object-cover scale-90"
                src={adventure}
                alt="Project-One"
              />
            </div>
          </div>
          <div className="container mt-12 pb-12">
            <div className="relative">
              <div className='absolute top-[8px]  left-1/2 w-[79%] rounded-2xl overflow-hidden transform -translate-x-1/2 -translate-y-1/2"'>
                <video
                  className="object-cover w-full h-full"
                  src={desktopVedio}
                  loop
                  muted
                  autoPlay
                ></video>
              </div>
              <img className="object-cover" src={desktop} alt="Project-One" />
            </div>
          </div>
          <div className="container mt-12 pb-12 flex justify-center">
            <div className="w-[80%] rounded-2xl overflow-hidden">
              <video
                className="object-cover w-full h-full"
                src={adventureMenu}
                loop
                muted
                autoPlay
              ></video>
            </div>
          </div>
          <div className="container flex justify-center mt-12 pb-12">
            <Heading
              size="text-xl"
              bold
              className=" mt-14 md:w-[60%] md:leading-[1.3] md:mt-20 md:text-6xl font-rubik tracking-wider"
            >
              <span>Check out the design file</span>
            </Heading>
            {/* <iframe
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FYglGxASyd8bYbgcryNuFRF%2FTravel-Website%3Ftype%3Ddesign%26node-id%3D0%253A1%26t%3DFbVtkI3TB5YXIVQL-1"
              allowFullScreen
            ></iframe> */}
          </div>
        </div>
      )}
      {id === "3" && <h1>Third project</h1>}
    </>
  );
};

export default Projectshowcase;
