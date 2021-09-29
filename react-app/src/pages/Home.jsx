import React from 'react';
import BallList from '../components/BallList';
import Button from '../components/Button';
import balls from '../constants/balls';
import getPocketedBalls from '../helper/getPocketedBalls';
import handleWin from '../helper/handleWin';
import modifyBallStatus from '../helper/modifyBallStatus';

const Home = () => {
  const [solidBalls, setSolidBalls] = React.useState(balls.solids);
  const [stripedBalls, setStripedBalls] = React.useState(balls.stripes);
  const [pocketedSolids, setPocketedSolids] = React.useState([]);
  const [pocketedStripes, setPocketedStripes] = React.useState([]);
  const [player, setPlayer] = React.useState({
    solid: {
      id: 'solid',
      name: '',
    },
    striped: {
      id: 'striped',
      name: '',
    },
  });

  const onPocket = e => {
    const id = e.currentTarget.id;
    const isPocketed = e.currentTarget.checked;
    const isSolidBall = id <= 8;
    if (isSolidBall) {
      const newSolidBalls = modifyBallStatus(id, solidBalls, isPocketed);
      return setSolidBalls(newSolidBalls);
    }
    const newStripedBalls = modifyBallStatus(id, stripedBalls, isPocketed);
    return setStripedBalls(newStripedBalls);
  };

  const handlePlayerWin = playerId => {
    if (playerId === 'solid') {
      handleWin(pocketedSolids, player.solid.name, player.striped.name);
      setStripedBalls(balls.stripes);
      setSolidBalls(balls.solids);
      return;
    }
    if (playerId === 'striped') {
      handleWin(pocketedStripes, player.striped.name, player.solid.name);
      setStripedBalls(balls.stripes);
      setSolidBalls(balls.solids);
      return;
    }
    return alert(`Can't fint player ID!`);
  };

  const handlePlayerNameChange = e => {
    const value = e.currentTarget.value;
    const id = e.currentTarget.id;

    setPlayer({
      ...player,
      [id]: {
        ...player[id],
        name: value,
      },
    });
  };

  React.useEffect(() => {
    const pocketedSolidBalls = getPocketedBalls(solidBalls);
    const pocketedStripedBalls = getPocketedBalls(stripedBalls);

    setPocketedSolids([...pocketedSolidBalls]);
    setPocketedStripes([...pocketedStripedBalls]);
  }, [solidBalls, stripedBalls]);

  return (
    <div className="w-full p-8">
      <h1 className="font-semibold w-full text-center text-2xl mb-8">
        WAYS 8 ball battle
      </h1>
      <h2 class="font-semibold w-full text-center text-5xl my-8">
        {player.solid.name} VS {player.striped.name}
      </h2>

      <div className="flex justify-between pr-32 items-center w-full border-t-2 py-8 ">
        <input
          id={player.solid.id}
          placeholder="Solid player name"
          className="py-4 font-semibold text-xl"
          onChange={handlePlayerNameChange}
        />
        <BallList balls={solidBalls} onPocket={onPocket} hidePocketed />

        <div className="border-l-4 pl-8">
          <h3>Pocketed Balls</h3>
          <BallList balls={pocketedSolids} onPocket={onPocket} />
        </div>
        <Button onClick={() => handlePlayerWin('solid')}>8</Button>
      </div>
      <div className="flex justify-between pr-32 items-center w-full border-t-2 border-b-2 py-8 ">
        <input
          id={player.striped.id}
          placeholder="Striped player name"
          className="py-4 font-semibold text-xl"
          onChange={handlePlayerNameChange}
        />
        <BallList
          balls={stripedBalls}
          onPocket={onPocket}
          isStripe
          hidePocketed
        />
        <div className="border-l-4 pl-8">
          <h3>Pocketed Balls</h3>
          <BallList balls={pocketedStripes} onPocket={onPocket} isStripe />
        </div>
        <Button onClick={() => handlePlayerWin('striped')}>8</Button>
      </div>
    </div>
  );
};

export default Home;
