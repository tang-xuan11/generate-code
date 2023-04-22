<template>
  <div class="h-full">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item name="1">
        <template #title>
          <div class='pl-4'>表单元素</div>
        </template>
        <draggable
          :list="formWidgetList"
          class='px-4 flex flex-row'
          group="design"
          @change="log"
          itemKey="type"
        >
          <template #item="{ element, index }">
            <el-tag class="cursor-pointer mr-2">{{ element.name }}</el-tag>
          </template>
        </draggable>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import formWidgetList from "@/data/form-widget-list";
import { ref } from "vue";
const activeNames = ref(["1"]);
const handleChange = () => {};
const log = (evt: any[]) => {
  console.log(evt);
};
</script>

<style lang=""></style>
