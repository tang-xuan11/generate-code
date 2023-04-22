<template>
  <div class="h-full w-full border">
    <draggable
      class="h-full w-full"
      :list="widgetList"
      group="design"
      itemKey="type"
    >
      <template #item="{ element, index }">
        <component :is="getWidget(element)" />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import inputWidget from "@/components/widget/input-widget.vue";
import draggable from "vuedraggable";
import { useDesignStore } from "@/store/design";
import { storeToRefs } from "pinia";
import { Widget } from "@/entity";
const store = useDesignStore();
const getWidget = (widget: Widget) => {
  if (widget.type === 'input') {
    return inputWidget
  }  
  return null;
};
const { widgetList } = storeToRefs(store);
</script>
