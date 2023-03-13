const PrimaryBtn = ({ children, className }) => {
  return (
    <button
      className={`border rounded bg-gray-300 text-black border-gray-300 py-2 px-5 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
