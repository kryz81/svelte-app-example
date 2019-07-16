<script>
  // props
  export let user = '';
  export let coursesCount = 0;

  // state/computed
  $: welcomeMessage = `Hello ${user}! Welcome in eCampus. You subscribe to <strong>${coursesCount}</strong> courses.`;
</script>

<div class="row">
  <div class="col-md-12">
    {@html welcomeMessage}
  </div>
</div>
