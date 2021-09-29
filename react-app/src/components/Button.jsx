const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-black cursor-pointer flex justify-center items-center w-20 h-20 rounded-full overflow-hidden shadow-lg border-2"
      onClick={onClick}
    >
      <span
        className={`bg-white bg-blue flex justify-center items-center rounded-full overflow-hidden w-7 h-7 text-sm`}
      >
        {children}
      </span>
    </button>
  );
};
export default Button;
