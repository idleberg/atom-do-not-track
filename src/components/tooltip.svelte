<script>
  import { onDestroy } from 'svelte';
  import store from '../store';
  import ListItem from './list-item.svelte';

  let services;
  const unsubscribe = store.subscribe(value => {
    services = value.services;
  });

  onDestroy(unsubscribe);
</script>

<section>
  <p><strong>Blocked Connections</strong></p>
  <div class="list-group">
    {#each Object.keys(services) as service}
      <ListItem name={services[service].shortName} counter={services[service].counter} />
    {/each}
  </div>
</section>

<style>
  section {
    color: inherit;
  }
</style>
