const DangerBtn = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-red-600 px-6 py-2 rounded cursor-pointer text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default DangerBtn;
