interface ExperienceProps {
  company: string;
  position: string;
  duration: string;
  responsibilities: { point: string }[];
}
const Experience: React.FC<ExperienceProps> = ({
  company,
  position,
  duration,
  responsibilities,
}) => {
  return (
    <div className='mt-8 font-rubik'>
      <h2 className='text-slate-700'>{company} </h2>
      <h1 className='font-semibold'>{position}</h1>
      <h4 className='text-slate-700'>{duration}</h4>
      <div className=''>
        {responsibilities.map((responsibility, idx) => (
          <li key={idx}>{responsibility.point}</li>
        ))}
      </div>
    </div>
  );
};

export default Experience;
