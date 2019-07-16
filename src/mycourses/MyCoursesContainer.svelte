<script>
  import { onMount } from 'svelte';

  import MyCoursesList from './MyCoursesList';

  // state
  let courses = [];
  let loading = false;

  // actions
  const unsubscribe = async courseId => {
    try {
      await fetch(`http://localhost:3000/mycourses/${courseId}`, {
        method: 'DELETE',
      });
      courses = courses.filter(({ id }) => id !== courseId);
    } catch (e) {
      alert(`Cannot unsubscribe: ${e.message}`);
    }
  };

  // lifecycle
  onMount(async () => {
    loading = true;
    const res = await fetch('http://localhost:3000/mycourses');
    courses = await res.json();
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
    <h4 class="mb-3">My Courses</h4>
    {#if loading}
      <div class="text-center">
        <i class="fas fa-spinner fa-pulse" />
      </div>
    {/if}
    <MyCoursesList {courses} {unsubscribe} />
  </div>
</div>
