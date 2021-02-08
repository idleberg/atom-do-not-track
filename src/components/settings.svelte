<script>
  import store from '../store';

  let services;
  const unsubscribe = store.subscribe(value => {
    services = value.services;
  });
</script>

<section class='do-not-track-panel'>
  <div class="block">

      <atom-panel>
        <div class="inset-panel">
          <div class="panel-heading">Blocket Connections</div>
          <div class="panel-body padded">
          {#each Object.keys(services) as service}
            <div class="list-item">
              <div class="inline-block">{services[service].name}</div>
              <span class="divider"></span>
              <div class="inline-block">{services[service].counter}</div>
            </div>
          {/each}
          </div>
        </div>
      </atom-panel>

      <input class="input-text" type='text' placeholder='Text'>

  </div>
</section>

<style src="./settings.scss"></style>
