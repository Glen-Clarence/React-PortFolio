const Footer: React.FC = () => {
  return (
    <footer className='bg-light-bg'>
      <div className='container py-8 md:py-16'>
        <h2 className='text-2xl font-stellaNova tracking-wide leading-heading'>
          Hire me
        </h2>
        <div className='text-xl mt-4 px-4 py-2 bg-button-primary w-fit text-white font-stellaNova '>
          <a href='mailto:glenclarence007@gmail.com'>
            glenclarence007@gmail.com
          </a>
        </div>
        <div className='text-xl px-4 py-2 bg-button-primary w-fit mt-4 text-white font-stellaNova'>
          +91 809 5081 182
        </div>
      </div>
      <div className='container flex justify-between items-end pb-8'>
        <div className='md:text-xl'>
          <h5>Linkedin</h5>
          <h5>Github</h5>
        </div>
        <h5 className='md:text-xl'>Resume</h5>
      </div>
    </footer>
  );
};

export default Footer;
