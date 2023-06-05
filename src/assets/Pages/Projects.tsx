interface RecentWorkProps {
  work: string;
  domain: string;
}
const Projects: React.FC<RecentWorkProps> = ({ work, domain }) => {
  return (
    <div className='mt-4 md:mt-8'>
      <div className='flex justify-between items-center border-b-2 border-button-primary pb-3 cursor-pointer hover:opacity-40 transition-all'>
        <h3 className='text-2xl md:text-6xl  font-rubik tracking-wider'>
          {work}
        </h3>
        <h5 className='w-[150px] md:w-full md:text-2xl text-right text-slate-600'>
          {domain}
        </h5>
      </div>
    </div>
    // <div className='pt-1' style={{ background: "#fce8ff" }}>
    //   <Projectshowcase />
    // </div>
  );
};

export default Projects;
