<script lang="ts" setup>
import api from '@anu-vue/component-meta/ATable.json';
</script>

# Table

<!-- 👉 Basic -->
::::card Basic

Use `rows` prop to provide data to `ATable`. Defining columns for table is optional. When columns aren't specified, columns will get calculate from first row and all columns will be filterable and sortable.

:::code DemoTableBasic
<<< @/demos/table/DemoTableBasic.vue{33}
:::

::::



<!-- 👉 API -->
## API

<Api :api="api"></Api>
