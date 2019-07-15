<script>
  import { createEventDispatcher } from "svelte";
  import Logo from "./logo.png";
  import { logout } from "../auth/auth";

  const dispatch = createEventDispatcher();
  const setRoute = name => () => dispatch("changeRoute", name);
</script>

<style>
  .btn {
    margin-left: 25px;
  }

  img {
    height: 50px;
    margin-top: -8px;
    vertical-align: -20px;
  }
</style>

<div class="row">
  <div class="col-md-3">
    <img src={Logo} alt="Adesso eCampus" />
    <strong>eCampus</strong>
  </div>
  <div class="col-md-6">
    <div class="btn-group" role="group">
      <button
        on:click={setRoute('home')}
        type="button"
        class="btn btn-secondary">
        Home
      </button>
      <button
        on:click={setRoute('catalog')}
        type="button"
        class="btn btn-secondary">
        Catalog
      </button>
      <button
        on:click={setRoute('mycourses')}
        type="button"
        class="btn btn-secondary">
        My Courses
      </button>
    </div>
  </div>
  <div class="col-md-3 text-right">
    <button on:click={logout} type="button" class="btn btn-outline-info btn-sm">
      Logout
    </button>
  </div>
</div>
