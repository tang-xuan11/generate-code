<template>
  <el-input v-model="input" placeholder="Please input" />
</template>

<script lang="ts">
  export default {
    name: 'input-widget',
  }
</script>

<script setup lang="ts">
import { ref } from "vue";
const input = ref("");
</script>
