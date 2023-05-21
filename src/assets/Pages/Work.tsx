import Heading from "../components/Heading";
import RecentWorks from "../components/RecentWorks";

const Work: React.FC = () => {
  return (
    <>
      <div className='container'>
        <Heading
          size='text-xl'
          bold
          className=' mt-14 md:w-[60%] md:leading-[1.3] md:mt-20 md:text-6xl font-stellaNova tracking-wider'
          headerText='Innovative solutions for modern challenges'
        />
      </div>
      <RecentWorks showButton={false} />
    </>
  );
};

export default Work;
