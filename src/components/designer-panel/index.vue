<template>
  <div class="h-full w-full border">
    <draggable
      class="h-full w-full"
      :list="widgetList"
      v-bind="{ group: 'design', ghostClass: 'ghost', animation: 300 }"
      itemKey="id"
      @add="onDragAdd"
    >
      <template #item="{ element, index }">
        <component :is="getWidget(element)" />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import widgetConf from "@/components/widget/index";
import draggable from "vuedraggable";
import { useDesignStore } from "@/store/design";
import { storeToRefs } from "pinia";
import { Widget } from "@/entity";
const store = useDesignStore();
const getWidget = (widget: Widget) => {
  const comp = widgetConf[widget.type]
  if (comp) {
    return comp
  }
  return null;
};
const onDragAdd = (evt: any) => {
   console.log(evt)
}
const { widgetList } = storeToRefs(store);

</script>

<style>
.ghost {
  @apply overflow-hidden border-2 border-blue-500 h-1 w-full;
}
</style>
