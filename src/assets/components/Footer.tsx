const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="container py-8 md:py-16">
        <h2 className="text-2xl font-rubik tracking-wide leading-heading">
          Hire me
        </h2>
        <div className="text-xl mt-4 px-4 py-2 bg-button-primary w-fit text-white font-rubik ">
          <a href="mailto:glenclarence007@gmail.com">
            glenclarence007@gmail.com
          </a>
        </div>
        <div className="text-xl px-4 py-2 bg-button-primary w-fit mt-4 text-white font-rubik">
          +91 809 5081 182
        </div>
      </div>
      <div className="container flex justify-between items-end pb-8">
        <div className="md:text-xl">
          <h5>
            <a
              href="https://www.linkedin.com/in/glen-warrangal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </h5>
          <h5>
            <a
              href="https://github.com/Glen-Clarence"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </h5>
        </div>
        <h5 className="md:text-xl">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1XD2bHtUOE2PsJo0BStuKc287Q0zNqJx8/view?usp=share_link"
          >
            Resume
          </a>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
