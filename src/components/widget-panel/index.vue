<template>
  <div class="h-full">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item name="1">
        <template #title>
          <div class="pl-4">表单元素</div>
        </template>
        <draggable
          :list="fields"
          class="px-4 flex flex-row"
          :group="{ name: 'design', pull: 'clone', put: false }"
          @change="log"
          itemKey="key"
          :clone="HandelWidgetClone"
        >
          <template #item="{ element, index }">
            <el-tag class="cursor-move mr-2">{{ element.name }}</el-tag>
          </template>
        </draggable>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { v4 as uuidv4 } from 'uuid';
import formWidgetList from "@/data/form-widget-list";
import { cloneNewFieldWidget } from "@/utils/widget";
import { ref } from "vue";
const activeNames = ref(["1"]);
const handleChange = () => {};
const fields = ref(formWidgetList.map(widget => {
  return {
    key: uuidv4(),
    ...widget
  }
}))
const HandelWidgetClone = (original: any) => {
  return cloneNewFieldWidget(original);
};
const log = (evt: any[]) => {
  console.log(evt);
};
</script>

<style lang=""></style>
