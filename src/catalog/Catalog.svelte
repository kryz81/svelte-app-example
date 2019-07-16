<script>
  import { onMount } from 'svelte';

  import Search from './Search';

  // state
  let loadedCourses = [];
  let courses = [];
  let loading = false;
  let search = '';

  // actions
  const subscribe = async course => {
    loading = true;
    await fetch('http://localhost:3000/mycourses', {
      method: 'POST',
      body: JSON.stringify(course),
    });
    loading = false;
  };

  const onSearch = ({ target: { value: searchString } }) => {
    courses = loadedCourses.filter(
      ({ name, tutor, description }) =>
        name.toUpperCase().startsWith(searchString.toUpperCase()) ||
        tutor.toUpperCase().startsWith(searchString.toUpperCase()) ||
        description.toUpperCase().startsWith(searchString.toUpperCase())
    );
  };

  const getCourses = async () => {
    const res = await fetch('http://localhost:3000/catalog');
    courses = loadedCourses = await res.json();
  };

  // lifecycle
  onMount(async () => {
    loading = true;
    await getCourses();
    loading = false;
  });
</script>

<style>
  .fa-spinner {
    font-size: 2rem;
  }
</style>

<div class="row">
  <div class="col-md-12">
    <h4 class="mb-3">Catalog</h4>
    <Search {search} {onSearch} />
    {#if loading}
      <div class="text-center">
        <i class="fas fa-spinner fa-pulse" />
      </div>
    {/if}
    {#each courses as course (course.id)}
      <div class="card mb-3">
        <div class="card-header">
          <strong>{course.name}</strong>
        </div>
        <div class="card-body">
          <p class="card-text">
            <span class="text-success">{course.date}</span>
            , tutor:
            <span class="text-info">{course.tutor}</span>
          </p>
          <p class="card-text">{course.description}</p>
          <button
            on:click={() => subscribe(course)}
            type="button"
            class="btn btn-success btn-sm">
            Subscribe
          </button>
        </div>
      </div>
    {/each}
  </div>
</div>
