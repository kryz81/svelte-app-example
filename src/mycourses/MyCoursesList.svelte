<script>
  import { getContext } from 'svelte';

  // consuming context
  const { theme } = getContext('theme');

  // props
  export let courses = [];
  export let unsubscribe = () => null;
</script>

<style>
  .dark {
    background-color: #777;
    color: #fff;
  }
</style>

<div class="row">
  <div class="col-md-12">
    {#each courses as course (course.id)}
      <div class="card mb-3" class:dark={theme === 'dark'}>
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
            on:click={() => unsubscribe(course.id)}
            type="button"
            class="btn btn-danger btn-sm">
            Unsubscribe
          </button>
        </div>
      </div>
    {/each}
  </div>
</div>
