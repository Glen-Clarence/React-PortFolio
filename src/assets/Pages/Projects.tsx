import React from "react";
interface RecentWorkProps {
  work: string;
  domain: string;
  image: string;
  handleHover: React.MouseEventHandler;
  handleMouseHover: React.MouseEventHandler;
}
const Projects: React.FC<RecentWorkProps> = ({
  work,
  domain,
  image,
  handleHover,
  handleMouseHover,
}) => {
  return (
    <div className="relative z-10">
      <div
        onMouseEnter={(e) => handleHover(e)}
        onMouseLeave={(e) => handleMouseHover(e)}
        className="flex justify-center items-center transition-all"
      >
        <h3 className="text-2xl md:text-6xl  font-rubik tracking-wider">
          {work}
        </h3>
        <h5 className="w-[150px] md:w-full md:text-2xl text-right text-slate-600 absolute right-[-100%]">
          {domain}
        </h5>
        <div
          className={
            "hovervedio w-[250px] h-[90px] absolute top-[-15px] right-[-100%] " +
            work
          }
        >
          <img
            src={image}
            className="w-full h-full object-cover rounded-xl"
            alt=" "
          />
        </div>
      </div>
    </div>
    // <div className='pt-1' style={{ background: "#fce8ff" }}>
    //   <Projectshowcase />
    // </div>
  );
};
export default Projects;
