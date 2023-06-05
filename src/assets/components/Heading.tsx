interface Headerprops {
  headerText: string;
  bold: boolean;
  size: string;
  className: string | null;
}
const Heading: React.FC<Headerprops> = ({
  headerText,
  bold,
  size,
  className,
}) => {
  return (
    <h1
      className={size + className + `${bold ? " font-bold" : " "}`}
    >
      {headerText}
    </h1>
  );
};

export default Heading;
