import Experience from "../components/Experience";
import Heading from "../components/Heading";
import GlenSmall from "../img/About.jpg";
import GlenLarge from "../img/About-Large.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { fadeIn } from "../components/Animtions";

const About: React.FC = () => {
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
  const aboutPage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeIn(aboutPage.current);
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={aboutPage}>
      <div className='container'>
        <Heading
          headerText='I just never know what to say on this page.'
          bold
          className=' md:text-6xl md:w-[60%] md:leading-[1.3] font-stellaNova tracking-wider leading-heading relative mt-24'
          size='text-xl '
        />
      </div>
      <div className='container md:flex md:justify-end md:-mt-32'>
        <img
          className='object-cover -mt-3'
          src={GlenSmall}
          alt='Glen Clarence'
          srcSet={`${GlenSmall} 600w, ${GlenLarge} 1200w`}
          sizes='(max-width: 600px) 600px, 1200px'
        />
      </div>
      <div className='container md:flex md:gap-10'>
        <h2 className='text-xl md:text-2xl md:h-fit sticky top-4 md:w-[30%] md:mt-16 font-stellaNova tracking-wider leading-heading mt-4'>
          But what I do know is that I'm a T-shaped Designer, with in-house
          experience,
          <span className='text-button-primary'>work experience</span> , and
          little life experience, and I'm energized by fun.
        </h2>
        <div className='md:w-[60%]'>
          <h2 className='text-xl font-stellaNova tracking-wide leading-heading mt-8'>
            Experience
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
        </div>
      </div>
    </div>
  );
};

export default About;
