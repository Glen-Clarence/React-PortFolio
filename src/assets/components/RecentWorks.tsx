import Heading from "./Heading";
import RecentWork from "./RecentWork";
import Arrow from "../img/arrow.png";
import { MyBubblyLink } from "./AnimateLink";

interface recentWorksProps {
  showButton: boolean;
}

const RecentWorks: React.FC<recentWorksProps> = ({ showButton }) => {
  const recentWorks = [
    { work: "Adventure", domain: "Design & Development" },
    { work: "TaskTracker", domain: "Design & Development" },
    { work: "NetProffiter", domain: "Design & Development" },
  ];
  return (
    <>
      <div className='container mt-12 md:mt-40'>
        <h2 className='md:text-2xl text-slate-700'>Recent Works</h2>
        {recentWorks.map((recent, index) => (
          <RecentWork key={index} work={recent.work} domain={recent.domain} />
        ))}
      </div>
      <div className='container flex gap-10 justify-between'>
        <Heading
          size='text-base'
          bold={false}
          className=' mt-14 md:mt-36 md:leading-[2.5rem] md:w-[60%] md:text-2xl font-stellaNova tracking-wider text-slate-600 leading-subHeading'
          headerText='I am dedicated to delivering the best possible user experience through my front-end design and development work. '
        />
        <Heading
          size='text-base'
          bold
          className=' mt-14 md:mt-36 text-md  hidden md:block md:w-[40%] md:flex-1 font-stellaNovaBold tracking-wider  leading-subHeading'
          headerText='My expertise in front-end design and development allows me to bring ideas to life, creating digital experiences that are not only aesthetically pleasing but also highly usable and engaging.'
        />
      </div>
      <div className='container mt-12 md:mt-36 flex justify-end font-stellaNova relative'>
        {showButton && (
          <>
            <div className='absolute -top-[50px] md:-top-[100px] right-[10px]'>
              <img src={Arrow} alt='Arrow' />
            </div>
            <MyBubblyLink to='/work'>
              <span className='bg-button-primary text-white text-4xl px-3 py-3  font-medium'>
                Work
              </span>
            </MyBubblyLink>
          </>
        )}
      </div>
    </>
  );
};

export default RecentWorks;
