<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "./layouts/BasicLayout.vue";

// import ACCESS_ENUM from "./access/accessEnum";
// import { useRouter } from "vue-router";
// import { useStore } from "vuex";
// const router = useRouter();
// const store = useStore();
// router.beforeEach((to, from, next) => {
//   // 仅管理员可见，判断当前用户是否有权限
//   if (to.meta?.access === ACCESS_ENUM.ADMIN) {
//     if (store.state.user.loginUser?.role !== "admin") {
//       next("/noAuth");
//       return;
//     }
//   }
//   next();
// });
</script>

<style scoped></style>
