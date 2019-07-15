<script>
  const getCatalog = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const err = Math.random();
        if (err > 0.1) {
          resolve([
            { id: "1", name: "Angular Basics" },
            { id: "2", name: "React for Dummies" }
          ]);
        } else {
          reject(new Error("DB offline"));
        }
      }, 2000);
    });
  const errorMessage = "Cannot load the catalog";
</script>

<div>Catalog</div>
{#await getCatalog()}
  <i class="fas fa-spinner fa-pulse" />
{:then items}
  <div>Fetched {items.length} courses</div>
{:catch error}
  <div>{errorMessage}: {error.message}</div>
{/await}
