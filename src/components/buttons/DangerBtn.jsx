const DangerBtn = ({ children, className }) => {
  return (
    <button
      className={`bg-red-600 px-6 py-2 rounded cursor-pointer text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default DangerBtn;
