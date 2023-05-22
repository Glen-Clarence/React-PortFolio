import { MyBubblyLink } from "./AnimateLink";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='bg-light-bg pb-4'>
      <div className='container  pt-5 '>
        <div className='flex justify-between relative items-end md:items-center'>
          <div className='font-rubik'>
            <MyBubblyLink to='/'>
              <h2 className='text-left'>Glen Clarence</h2>
              <h5 className='text-slate-600'>UX/UI Engineer</h5>
            </MyBubblyLink>
          </div>
          <div className='hidden md:block font-rubik'>
            <h2>Hubli</h2>
            <h5 className='text-slate-600'>Karnataka</h5>
          </div>
          <div className='hidden md:block font-rubik'>
            <h5 className='text-slate-600'>
              <a href='mailto:glenclarence007@gmail.com'>
                glenclarence007@gmail.com
              </a>
            </h5>
          </div>
          <div className=''>
            <h5 className='text-slate-600 font-rubik'>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/glen-warrangal/'
              >
                Linkedin
              </a>
            </h5>
          </div>
          <div className='border-b-[3px] border-border-bg opacity-50 absolute -bottom-[8px] w-full'></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
