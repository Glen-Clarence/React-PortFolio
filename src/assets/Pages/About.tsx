import Experience from "../components/Experience";
import Heading from "../components/Heading";
import GlenSmall from "../img/About.jpg";
import GlenLarge from "../img/About-Large.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { fadeIn } from "../components/Animtions";

const About: React.FC = () => {
  const projectExperience = [
    {
      company: "Dandeli Adventure Resort Website",
      position: "Web Development, UX Design",
      duration: "March ’23",
      responsibilities: [
        {
          point:
            "Provided comprehensive information about the resort’s location and nearby attractions, along with recommendations for things to see and do, transportation options, and maps.",
        },
        { point: "React, Sass, HTML5, CSS3, JavaScript" },
      ],
    },
    {
      company: "Beatty’s Kitchen",
      position: "Design",
      responsibilities: [
        {
          point:
            "I designed a project using Figma, where I developed a comprehensive design system and created reusable components. The project showcases my proficiency in UI/UX design, as well as my ability to create cohesive and visually appealing interfaces.",
        },
        {
          point: "Figma, Components, Design system",
        },
      ],
      duration: "Jan ’23",
    },
  ];
  const workExperience = [
    {
      company: "Alienhu Pvt Lmt (Proffitify & Netproffiter)",
      position: "LEAD UX Designer/Engineer (Full-time)",
      duration: "Jan 2023 - Present",
      responsibilities: [
        {
          point:
            "Conducted user research and analysis to design intuitive user interfaces for web applications, using tools such as Figma and InVision to create wireframes and prototypes.",
        },
        {
          point:
            "Designed and implemented interactive elements such as micro-interactions and animations to enhance user engagement and satisfaction, while also incorporating touch and voice interfaces to improve accessibility and ease of use.",
        },
        {
          point:
            "Responsive web design: Cross-browser compatibility, responsive design, accessibility, SEO, performance optimization, debugging, troubleshooting, collaboration, communication.",
        },
      ],
    },
    {
      company: "Freelancing",
      position: "Front-end Designer/Developer (Part-time)",
      duration: "Jan 2020 - Present",
      responsibilities: [
        {
          point:
            "Developed responsive websites using HTML, CSS, and JavaScript, with particular expertise in using React & Angular to build interactive user interfaces.",
        },
        {
          point:
            "Optimized website performance and search engine rankings by implementing responsive design, improving accessibility, and utilizing SEO best practices, while collaborating with team members to troubleshoot issues and ensure timely project delivery.",
        },
        {
          point:
            "Conducted user research and analysis to design intuitive user interfaces for web applications, using tools such as Figma and InVision to create wireframes and prototypes.",
        },
      ],
    },
    {
      company: "Alienhu Pvt Lmt",
      position: "UX Designer/Engineer (Full-time)",
      duration: "August 2021 - December 2022",
      responsibilities: [
        {
          point:
            "Collaborated with back-end developers to integrate front-end code with server-side logic.",
        },
        {
          point:
            "Communicated technical solutions and progress to team members and stakeholders.",
        },
      ],
    },
  ];
  const otherExperience = [
    {
      company: "Microsoft Student Ambassador Hubli, India",
      position: "Online Technical & Soft-Skills Trainer",
      duration: "Jan 2021",
      responsibilities: [
        {
          point:
            "Conducted online technical & soft-skills training impacting over 300 students.",
        },
        {
          point:
            "Created engaging educational content and delivered interactive sessions on various topics.",
        },
        {
          point:
            "Collaborated with fellow ambassadors to organize virtual events and workshops.",
        },
        {
          point:
            "Provided mentorship and guidance to students interested in technology and career development.",
        },
      ],
    },
    {
      company: "Sacristan Hubli, India",
      position: "Church Sacristan",
      duration: "2015 - 2017",
      responsibilities: [
        {
          point:
            "Managed the setup and organization of church services and ceremonies.",
        },
        {
          point:
            "Assisted with the maintenance and decoration of the church premises.",
        },
        {
          point:
            "Coordinated with clergy and volunteers to ensure smooth execution of church activities.",
        },
        {
          point:
            "Supported community outreach initiatives and participated in charity events.",
        },
      ],
    },
  ];
  const aboutPage = useRef<HTMLDivElement>(null);
  const Work = useRef<HTMLDivElement>(null);
  const Projects = useRef<HTMLDivElement>(null);
  const otherExp = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: Work.current,
          start: "top 20%",
          end: "bottom 20%",
          // markers: true,
          onLeave: () => gsap.to(".design", { color: "red" }),
          onLeaveBack: () => gsap.to(".design", { color: "black" }),
        },
      });
      ScrollTrigger.create({
        trigger: Projects.current,
        start: "top 20%",
        end: "bottom 20%",
        // markers: true,
        onLeave: () => {
          gsap.to(".sub-text", { duration: 0.3, color: "#777" });
          gsap.to(".inhouse", { color: "#146C94", opacity: 1 });
          gsap.to(".design", { color: "#777" });
        },
        onLeaveBack: () => {
          gsap.to(".sub-text", { duration: 0.3, color: "black" });
          gsap.to(".inhouse", { color: "black" });
          gsap.to(".design", { color: "black" });
        },
      });
      ScrollTrigger.create({
        trigger: otherExp.current,
        start: "top 20%",
        end: "bottom 20%",
        onLeave: () => gsap.to(".otherExp", { color: "purple" }),
        onLeaveBack: () => gsap.to(".otherExp", { color: "#777" }),
      });
      fadeIn(aboutPage.current);
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={aboutPage}>
      <div className="container">
        <Heading
          bold
          className=" md:text-6xl md:w-[60%] md:leading-[1.3] font-rubik tracking-wider leading-heading relative mt-24"
          size="text-xl "
        >
          <span>I just never know what to say on this page.</span>
        </Heading>
      </div>
      <div className="container md:flex md:justify-end md:-mt-32">
        <img
          className="object-cover -mt-3"
          src={GlenSmall}
          alt="Glen Clarence"
          srcSet={`${GlenSmall} 600w, ${GlenLarge} 1200w`}
          sizes="(max-width: 600px) 600px, 1200px"
        />
      </div>
      <div className="container md:flex md:gap-10">
        <h2 className="sub-text text-xl md:text-3xl font-bold md:h-fit sticky top-4 md:w-[30%] md:mt-16 font-rubik tracking-wider leading-heading mt-4">
          <span>But what I do know is that I </span>
          <span>Design & Develop</span>,{" "}
          <span className="inhouse">with in-house experience</span>,{" "}
          <span className="design">work experience</span> , and{" "}
          <span className="otherExp">little life experience</span>,{" "}
          <span>and I'm energized by fun.</span>
        </h2>
        <div className="md:w-[60%]">
          <h2
            ref={Projects}
            className="text-xl font-rubik tracking-wide leading-heading mt-8"
          >
            Project Experience
          </h2>
          {projectExperience.map((exp, index) => (
            <Experience
              company={exp.company}
              duration={exp.duration}
              position={exp.position}
              responsibilities={exp.responsibilities}
              key={index}
            />
          ))}
          <h2
            ref={Work}
            className="text-xl font-rubik tracking-wide leading-heading mt-8"
          >
            Work Experience
          </h2>
          {workExperience.map((exp, index) => (
            <Experience
              company={exp.company}
              duration={exp.duration}
              position={exp.position}
              responsibilities={exp.responsibilities}
              key={index}
            />
          ))}
          <h2
            ref={otherExp}
            className="text-xl font-rubik tracking-wide leading-heading mt-8"
          >
            Other Experience
          </h2>
          {otherExperience.map((exp, index) => (
            <Experience
              company={exp.company}
              duration={exp.duration}
              position={exp.position}
              responsibilities={exp.responsibilities}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
