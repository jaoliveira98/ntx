const Title = ({ children, className }) => {
  return (
    <h2 className={`text-white font-bold md:text-xl p-4 ${className}`}>
      {children}
    </h2>
  );
};

export default Title;
