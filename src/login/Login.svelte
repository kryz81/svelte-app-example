<script>
  // imports
  import { login } from "../auth/auth";

  // state
  let username = "";
  let password = "";
  let submitted = false;
  const errMsg = "Invalid username/password";

  // actions
  const submit = () => {
    submitted = true;
    if (err) {
      return;
    }
    login(username);
  };

  const reset = () => (submitted = false);

  // computed
  $: err = submitted && (username !== "Kryz" || password !== "12345");
</script>

<div class="row">
  <div class="col-md-4 offset-md-4">
    {#if err}
      <div class="alert alert-danger" role="alert">{errMsg}</div>
    {/if}
    <form on:submit|preventDefault={submit}>
      <div class="form-group">
        <label>Username</label>
        <input
          bind:value={username}
          on:input={reset}
          type="text"
          class="form-control"
          data-testid="username" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          bind:value={password}
          on:input={reset}
          type="password"
          class="form-control"
          data-testid="password" />
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</div>
