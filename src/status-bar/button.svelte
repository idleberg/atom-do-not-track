<script>
  import { event } from '../events';
  import { getConfig } from '../utils';

  let alwaysShowCounter = getConfig('alwaysShowCounter');
  let state = 'subtle'
  let counter = 0;

  event.on('do-not-track:blocked-connection', data => {
    state = "error"

    counter += 1
  });

  atom.config.observe('do-not-track.alwaysShowCounter', isVisible => {
    alwaysShowCounter = isVisible;
  });
</script>

<button class="inline-block text-{state}">
  <span class="icon icon-stop"></span>
  {alwaysShowCounter ? counter : ''}
</button>

<style src="./button.scss"></style>
