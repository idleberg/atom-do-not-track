<script>
  import { event } from '../events';
  import store from '../store';

  let services;
  const unsubscribe = store.subscribe(value => {
    services = value.services;
  });
</script>

<section class="do-no-track">
  <p><strong>Blocked Connections</strong></p>
  <ul class="list-group">
    {#each Object.keys(services) as service}
      <li class="list-item">
        <div class="inline-block">{services[service].shortName}</div>
        <span class="divider"></span>
        <div class="inline-block">{services[service].counter}</div>
      </li>
    {/each}
  </ul>
</section>

<style src="./tooltip.scss"></style>
