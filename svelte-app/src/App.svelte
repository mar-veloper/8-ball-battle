<script>
  import { Router, Route, Link } from 'svelte-navigator';
  import Home from './routes/Home.svelte';
  import Test from './routes/Test.svelte';
</script>

<Router>
  <Link to="">Home</Link>
  <Link to="test">Test</Link>
  <Route exact path="" component={Home} />
  <Route path="test" component={Test} />
</Router>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
