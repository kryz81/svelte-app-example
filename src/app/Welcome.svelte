<script>
  // props
  export let user = "";

  // state/computed
  $: welcomeMessage = `Hello ${user}! Welcome in eCampus.`;
</script>

<div class="row">
  <div class="col-md-12">{welcomeMessage}</div>
</div>
