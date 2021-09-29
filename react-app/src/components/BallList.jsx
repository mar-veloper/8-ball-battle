const BallList = ({
  balls,
  onPocket,
  hidePocketed = false,
  isStripe = false,
}) => {
  return (
    <ul className="flex gap-4 my-8 w-max h-16">
      {balls.map(b => {
        const show = hidePocketed ? !b.isPocketed : b.isPocketed;
        const bgColor = isStripe ? 'white' : b.color;

        if (show) {
          return (
            <label
              key={b.number}
              className={`bg-${bgColor} cursor-pointer flex justify-center items-center w-16 h-16 rounded-full overflow-hidden shadow-lg border-2`}
            >
              <input
                className="cursor-pointer w-0"
                id={b.number}
                type="checkbox"
                checked={b.isPocketed}
                onChange={onPocket}
              />
              <div
                className={
                  isStripe &&
                  `w-full bg-${b.color} flex justify-center items-center p-1`
                }
              >
                <span
                  className={`bg-white bg-blue flex justify-center items-center rounded-full overflow-hidden w-7 h-7 text-sm`}
                >
                  {b.number}
                </span>
              </div>
            </label>
          );
        }
      })}
    </ul>
  );
};

export default BallList;
