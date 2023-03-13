const SecondaryBtn = ({ children, className }) => {
  return (
    <button
      className={`border rounded text-white border-gray-300 py-2 px-5 ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
