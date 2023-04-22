<script setup lang="ts"></script>

<template>
  <el-container class="h-screen">
    <el-header class="border-b-2 flex items-center"
      ><div class="text-3xl font-bold">代码生成平台</div></el-header
    >
    <el-container>
      <el-aside width="300px">
        <widget-panel />
      </el-aside>
      <el-container>
        <designer-panel />
      </el-container>
      <el-aside width="200px"> </el-aside>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import WidgetPanel from "@/components/widget-panel/index";
import DesignerPanel from "@/components/designer-panel/index";
</script>

<style scoped></style>
