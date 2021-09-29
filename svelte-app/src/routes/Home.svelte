<script>
  import balls from '../constants/balls';
  import getPocketedBalls from '../helper/getPocketedBalls';
  import modifyBallStatus from '../helper/modifyBallStatus';
  import handleWin from '../helper/handleWin';
  import BallList from '../components/BallList.svelte';
  import Button from '../components/Button.svelte';

  let stripedBalls = balls.stripes;
  let solidBalls = balls.solids;
  let player = {
    solid: {
      id: 'solid',
      name: '',
    },
    striped: {
      id: 'striped',
      name: '',
    },
  };

  $: pocketedStriped = getPocketedBalls(stripedBalls);
  $: pocketedSolid = getPocketedBalls(solidBalls);

  const onPocket = e => {
    const id = e.target.id;
    const isPocketed = e.target.checked;
    const isSolidBall = id <= 8;
    if (isSolidBall) {
      return (solidBalls = modifyBallStatus(id, solidBalls, isPocketed));
    }
    return (stripedBalls = modifyBallStatus(id, stripedBalls, isPocketed));
  };

  const handlePlayerWin = playerId => {
    if (playerId === 'solid') {
      handleWin(pocketedSolid, player.solid.name, player.striped.name);
      stripedBalls = balls.stripes;
      solidBalls = balls.solids;
      return;
    }
    if (playerId === 'striped') {
      handleWin(pocketedStriped, player.striped.name, player.solid.name);
      stripedBalls = balls.stripes;
      solidBalls = balls.solids;
      return;
    }
    return alert(`Can't fint player ID!`);
  };
</script>

<main class="w-full p-8">
  <h1 class="font-semibold w-full text-center text-2xl mb-8">
    WAYS 8 ball battle
  </h1>
  <h2 class="font-semibold w-full text-center text-5xl my-8">
    {player.solid.name} VS {player.striped.name}
  </h2>

  <div class="flex justify-between pr-32 items-center w-full border-t-2 py-8 ">
    <input
      bind:value={player.solid.name}
      placeholder="Solid player name"
      class="py-4 font-semibold text-xl border-none"
    />
    <BallList balls={solidBalls} {onPocket} hidePocketed />
    <div class="border-l-4 pl-8">
      <h3>Pocketed</h3>
      <BallList balls={pocketedSolid} {onPocket} />
    </div>
    <Button onClick={() => handlePlayerWin('solid')}>8</Button>
  </div>
  <div
    class="flex justify-between pr-32 items-center w-full border-t-2 border-b-2 py-8 "
  >
    <input
      bind:value={player.striped.name}
      placeholder="Striped player name"
      class="py-4 font-semibold text-xl border-none"
    />
    <BallList balls={stripedBalls} {onPocket} hidePocketed isStripe />
    <div class="border-l-4 pl-8">
      <h3>Pocketed</h3>
      <BallList balls={pocketedStriped} {onPocket} isStripe />
    </div>
    <Button onClick={() => handlePlayerWin('striped')}>8</Button>
  </div>
</main>
