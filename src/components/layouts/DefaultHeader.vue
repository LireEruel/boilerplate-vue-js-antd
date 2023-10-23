<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const menuKey = ref([window.location.pathname]);
</script>

<template>
  <a-layout id="components-layout">
    <a-layout-header
      :style="{ position: 'fixed', width: '100%', overflow: 'hidden' }"
    >
      <div style="float: left">
        <router-link to="/" class="app-logo">Home </router-link>
      </div>

      <div class="nav-right">
        <!-- 로그인 -->
        <a-button class="login-button"> 로그인 </a-button>
        <span class="app-bar-padding" />
      </div>
      <a-menu
        v-model:selectedKeys="menuKey"
        class="menu"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/">
          <RouterLink to="/"> MenuItem </RouterLink></a-menu-item
        >
        <a-menu-item key="/#">
          <RouterLink to="/#"> MenuItem2 </RouterLink>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
  </a-layout>
</template>

<style lang="scss" scoped>
#components-layout {
  height: 70px;
  width: 100%;
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}

#components-layout .menu {
  float: right;
}

#components-layout .nav-right {
  float: right;
  padding-left: 20px;
}

.login-button {
  font-weight: 900;
}
</style>
