// eslint-disable-next-line import/no-anonymous-default-export
export default (pocketedBalls, player, opponentPlayer) => {
  const numOfBallsToPocketBefore8Ball = 7;
  const isWinner = pocketedBalls.length === numOfBallsToPocketBefore8Ball;

  if (isWinner) {
    return alert(`${player} won the battle.`);
  }

  return alert(`${opponentPlayer} won the battle.`);
};
