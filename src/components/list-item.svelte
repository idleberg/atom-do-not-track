<script>
  let name;
  let counter;
  let highlight;

function getHighlightClass(counter) {
  switch (true) {
    case parseInt(counter, 10) >= 100:
      return 'highlight-error';

    case parseInt(counter, 10) >= 25:
      return 'highlight-warning';

    default:
      return 'highlight-info';
  }
}

  export { name, counter, highlight };
</script>

<list-item>
  <div class="inline-block">{name}</div>
  <divider/>
  <div class="inline-block{highlight && (' ' + getHighlightClass(counter))}">{counter}</div>
</list-item>

<style>
  list-item {
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  divider {
    border-top: 1px dashed;
    flex: 1 1 0;
    margin-right: 10px;
    margin-top: .80em;
    vertical-align: center;
  }
</style>
