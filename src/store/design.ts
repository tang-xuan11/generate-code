import { Widget } from "@/entity";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDesignStore = defineStore("design", () => {
  const widgetList = ref<Widget[]>([]);
  function addWidgetList(widget: Widget) {
    widgetList.value.push(widget);
  }

  return { widgetList, addWidgetList };
});
