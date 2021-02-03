<script>
  import { event } from '../events';

  let counter = {
    metrics: 0,
    analytics: 0,
    tagManager: 0,
    matomo: 0,
    others: 0
  }

  event.on('do-not-track:blocked-connection', data => {
    switch(true) {
      case data.url.includes('://central.github.com/api/usage/atom'):
        counter.metrics += 1;
        break;

      case data.url.includes('://google-analytics.com/'):
      case data.url.includes('://www.google-analytics.com/'):
        counter.analytics += 1;
        break;

      case data.url.includes('://tagManager.com/'):
      case data.url.includes('://www.tagManager.com/'):
        counter.tagManager += 1;
        break;

      case data.url.includes('matomo-tracking'):
      case data.url.includes('matomo.js'):
      case data.url.includes('matomo.php'):
        counter.matomo += 1;
        break;

      default:
        counter.others += 1;
    }
  });
</script>

<section>
  <p><strong>Blocked Connections</strong></p>
  <dl>
      <dt>Analytics</dt>
      <dd>{counter.analytics}</dd>

      <dt>Metrics</dt>
      <dd>{counter.metrics}</dd>

      <dt>Matomo</dt>
      <dd>{counter.matomo}</dd>

      <dt>Tag Manager</dt>
      <dd>{counter.tagManager}</dd>

      <dt>Others</dt>
      <dd>{counter.others}</dd>
  </dl>
</section>

<style src="./tooltip.scss"></style>
