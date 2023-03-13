const LargeTitle = ({ children, className }) => {
  return (
    <h1 className={`text-white text-3xl md:text-6xl font-bold ${className}`}>
      {children}
    </h1>
  );
};

export default LargeTitle;
