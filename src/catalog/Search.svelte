<script>
  export let search = '';
  export let onSearch;
</script>

<style>
  div {
    margin-bottom: 25px;
  }
</style>

<div>
  <input
    bind:value={search}
    on:input={onSearch}
    type="text"
    class="form-control"
    placeholder="Search courses..." />
</div>
