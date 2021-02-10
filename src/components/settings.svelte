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
  <div class="block">
      <atom-panel>
        <div class="inset-panel">
          <div class="panel-heading">Blocked Connections</div>
          <div class="panel-body padded">
          {#each Object.keys(services) as service}
            <ListItem name={services[service].name} counter={services[service].counter} highlight={true} />
          {/each}
          </div>
        </div>
      </atom-panel>
  </div>

  <div class="block">
    <input class="input-text" type='text' placeholder="Text">
  </div>
</section>

<style>
  section {
    padding: 5px;
  }
</style>
