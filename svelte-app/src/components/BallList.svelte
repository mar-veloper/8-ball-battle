<script>
  import { fade } from 'svelte/transition';

  export let balls;
  export let onPocket;
  export let hidePocketed = false;
  export let isStripe = false;
</script>

<ul class="flex gap-4 mt-8 w-max h-16">
  {#each balls as ball}
    {#if hidePocketed ? !ball.isPocketed : ball.isPocketed}
      <label
        class={`bg-${
          isStripe ? 'white' : ball.color
        } cursor-pointer flex justify-center items-center w-16 h-16 rounded-full overflow-hidden shadow-lg border-2`}
      >
        <!-- <label out:fade in:fade> -->
        <input
          class="cursor-pointer w-0"
          id={ball.number}
          type="checkbox"
          on:change={onPocket}
          bind:checked={ball.isPocketed}
        />
        <div
          class={isStripe &&
            `w-full bg-${ball.color} flex justify-center items-center p-1`}
        >
          <span
            class={`bg-white bg-blue flex justify-center items-center rounded-full overflow-hidden w-7 h-7 text-sm`}
          >
            {ball.number}
          </span>
        </div>
      </label>
    {/if}
  {/each}
</ul>
