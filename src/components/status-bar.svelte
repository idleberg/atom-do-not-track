<script>
  import { onDestroy } from 'svelte';
  import { getConfig } from '../utils';
  import store from '../store';

  function handleClick() {
    const activeEditor = atom.workspace.getActivePane();
    const activeView = atom.views.getView(activeEditor);

    atom.commands.dispatch(activeView, 'do-not-track:toggle-settings');
  }

  let buttonClass;
  let counter;
  const unsubscribe = store.subscribe(value => {
    buttonClass = value.buttonClass;
    counter = value.counter;
  });

  let alwaysShowCounter = getConfig('alwaysShowCounter');
  atom.config.observe('do-not-track.alwaysShowCounter', isVisible => {
    alwaysShowCounter = isVisible;
  });

  onDestroy(unsubscribe);
</script>

<button class="inline-block text-{buttonClass}" on:click={handleClick}>
  <span class="icon icon-stop"></span>
  {alwaysShowCounter && counter !== 0 ? counter : ""}
</button>

<style>
   button {
    background-color: inherit;
    border: none;
  }
</style>
