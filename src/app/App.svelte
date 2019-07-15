<script>
  import { setContext } from "svelte";
  import { fade } from "svelte/transition";

  import Header from "./Header";
  import Welcome from "./Welcome";
  import Catalog from "../catalog/Catalog";
  import MyCoursesContainer from "../mycourses/MyCoursesContainer";
  import Login from "../login//Login";

  let theme = "light";
  setContext("theme", theme);

  const fadeConfig = { duration: 250 };
  const user = localStorage.getItem("user");
  let currentRoute = "home";

  const changeRoute = ({ detail }) => (currentRoute = detail);
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
      <div transition:fade={fadeConfig}>
        <Catalog />
      </div>
    {:else if currentRoute === 'mycourses'}
      <div transition:fade={fadeConfig}>
        <MyCoursesContainer />
      </div>
    {:else}
      <div transition:fade={fadeConfig}>
        <Welcome {user} foo="bar" />
      </div>
    {/if}
  {:else}
    <Login />
  {/if}
</div>
