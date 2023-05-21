import Hero from "../components/Hero";
import RecentWorks from "../components/RecentWorks";

const Home: React.FC = () => {
  return (
    <div className='bg-light-bg'>
      <Hero />
      <RecentWorks showButton />
    </div>
  );
};

export default Home;
