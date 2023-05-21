import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='bg-light-bg pb-4'>
      <div className='container  pt-5 '>
        <div className='flex justify-between relative items-end md:items-center'>
          <div className='font-rubik'>
            <Link to='/'>
              <h2>Glen Clarence</h2>
              <h5 className='text-slate-600'>UX/UI Engineer</h5>
            </Link>
          </div>
          <div className='hidden md:block font-rubik'>
            <h2>Hubli</h2>
            <h5 className='text-slate-600'>Karnataka</h5>
          </div>
          <div className='hidden md:block font font-rubik'>
            <h5 className='text-slate-600'>glenclarence007@gmail.com</h5>
          </div>
          <div className=''>
            <h5 className='text-slate-600'>Linkedin</h5>
          </div>
          <div className='border-b-[3px] border-border-bg opacity-50 absolute -bottom-[8px] w-full'></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
