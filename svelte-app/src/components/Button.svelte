<script>
  export let onClick;
</script>

<button
  class="bg-black cursor-pointer flex justify-center items-center w-20 h-20 rounded-full overflow-hidden shadow-lg border-2"
  on:click={onClick}
>
  <span
    class={`bg-white bg-blue flex justify-center items-center rounded-full overflow-hidden w-7 h-7 text-sm`}
  >
    <slot />
  </span>
</button>
