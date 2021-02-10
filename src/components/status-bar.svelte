<script>
  import { onDestroy } from 'svelte';
  import { getConfig } from '../utils';
  import store from '../store';

  let buttonClass;
  let counter;
  const unsubscribe = store.subscribe(value => {
    buttonClass = value.buttonClass;
    counter = value.counter;
  });

  onDestroy(unsubscribe);

  let alwaysShowCounter = getConfig('alwaysShowCounter');
  atom.config.observe('do-not-track.alwaysShowCounter', isVisible => {
    alwaysShowCounter = isVisible;
  });
</script>

<button class="inline-block text-{buttonClass}">
  <span class="icon icon-stop"></span>
  {alwaysShowCounter ? counter : ""}
</button>

<style>
   button {
    background-color: inherit;
    border: none;
  }
</style>
