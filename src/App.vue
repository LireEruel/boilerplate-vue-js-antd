<script setup lang="ts">
import { Button } from "ant-design-vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <router-view class="header" name="header" />
    <div class="contents">
      <router-view class="body" name="body" />
    </div>
    <router-view class="footer" name="footer" />
  </div>
</template>

<style lang="scss" scoped>
.app {
  color: rgba(0, 0, 0, 0.85);
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

.contents {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 600px;
  overflow-y: auto;
}
</style>
