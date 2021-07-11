<script>
  import { isValidPattern, persistState } from '../utils';
  import { onDestroy } from 'svelte';
  import ListItem from './list-item.svelte';
  import store from '../store';

  let services;
  let customUrls;
  const unsubscribe = store.subscribe(value => {
    services = value.services;
    customUrls = value.customUrls;
  });

  function handleSubmit() {
    let editor = document.querySelector('#url-input .line .syntax--text');

    addUrl(editor.innerText);
  }

  function handleKeyup(event) {
    if (event.code == 'Enter') {
      handleSubmit();
    }
  }

  async function updateState(customUrls) {
    const previousCustomUrls = customUrls;

    store.update(state => {
      state.customUrls = customUrls;

      return state;
    });

    const { init: updateFilter } = await import('../filter');

    try {
      await updateFilter();
    } catch (err) {
      store.update(state => {
        state.customUrls = previousCustomUrls;

        return state;
      });
    }

    persistState(customUrls);
  }

  function addUrl(value) {
    if (!value.trim().length || !isValidPattern(value)) return false;

    if (!customUrls.includes(value.trim())) {
      customUrls.push(value.trim());

      updateState(customUrls);

      return true;
    }

    return false;
  }

  function removeUrl(event) {
    const value = event.target.parentNode.innerText.trim();
    const index = customUrls.indexOf(value);

    if (index < 0) return;

    customUrls.splice(index, 1);
    updateState(customUrls);
  }

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
    <atom-panel>
      <div class="inset-panel">
        <div class="panel-heading">Custom URLs</div>
        <div class="panel-body padded">
          <p>Here you can add match patterns for URLs. These consist of three parts: scheme, host, and path. The scheme and host are separated by <code>://</code>.
            See the <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">MDN documentation</a> for details.</p>

          <form on:submit|preventDefault={handleSubmit}>
            <atom-text-editor
              id="url-input"
              class="editor mini"
              mini
              data-grammar="text plain null-grammar"
              placeholder="&lt;scheme&gt;://&lt;host&gt;/&lt;path&gt;"
              on:keyup|preventDefault={handleKeyup}
            />
            <button type="submit" aria-label="Add URL to list" class="btn icon icon-gist-new"></button>
          </form>

          <ul class="list-group">
            {#each customUrls as url}
              <li class="list-item" title={url}>
                <button aria-label="Remove URL from list" class="btn btn-xs icon icon-remove-close" on:click={removeUrl}></button>
                <span class="text-info">{url}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </atom-panel>
  </div>
</section>

<style type="text/scss">
  section {
    padding: 5px;
  }

  form {
    display: flex;
    margin-bottom: 1em;

    input, atom-text-editor {
      flex-grow: 1;
    }
  }

  li {
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
