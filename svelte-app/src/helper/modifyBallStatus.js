// eslint-disable-next-line import/no-anonymous-default-export
export default (id, array, isPocketed) => {
  const index = array.findIndex(b => Number(b.number) === Number(id));
  const modifiedBall = {
    ...array[index],
    isPocketed,
  };

  const newArr = [
    ...array.slice(0, index),
    modifiedBall,
    ...array.slice(index + 1),
  ];

  return newArr;
};
