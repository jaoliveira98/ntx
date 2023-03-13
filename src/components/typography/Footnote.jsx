const Footnote = ({ children, className }) => {
  return (
    <p className={`text-gray-400 text-sm my-4 ${className}`}>{children}</p>
  );
};

export default Footnote;
