<script>
  import { onMount, setContext } from 'svelte';

  import Header from './Header';
  import Welcome from './Welcome';
  import Catalog from '../catalog/Catalog';
  import MyCoursesContainer from '../mycourses/MyCoursesContainer';
  import Login from '../login//Login';

  // setting context
  let theme = 'light';

  setContext('theme', theme);

  // state
  const user = localStorage.getItem('user');
  let currentRoute = 'home';
  let coursesCount = 0;

  // event listener
  const changeRoute = ({ detail }) => (currentRoute = detail);

  // lifecycle functions
  onMount(async () => {
    const res = await fetch('http://localhost:3000/mycourses');
    const items = await res.json();

    // setting "state"
    coursesCount = items.length;
  });
</script>

<style>
  :global(body) {
    background-color: #f0f0f0;
  }
  :global(.container) {
    width: 900px;
    background-color: #fff;
    padding: 25px;
  }
</style>

<div class="container">
  {#if user}
    <Header on:changeRoute={changeRoute} />
    <hr />
    {#if currentRoute === 'catalog'}
      <Catalog />
    {:else if currentRoute === 'mycourses'}
      <MyCoursesContainer />
    {:else}
      <Welcome {user} {coursesCount} foo="bar" />
    {/if}
  {:else}
    <Login />
  {/if}
</div>
