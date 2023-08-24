<template>
  <a-row class="globalHeader" align="center" :wrap="false">
    <!-- 左部 -->
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <!-- logo -->
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/vue.svg" />
            <div class="title">鲸落OJ</div>
          </div>
        </a-menu-item>
        <!-- 菜单 -->
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <!-- 右部 -->
    <a-col flex="100px">
      <div>
        {{ store.state.user?.loginUser?.userName ?? "未登录" }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
// Vue路由
import { useRoute, useRouter } from "vue-router";
import { routes } from "../router/routes";
// 全局状态管理
import { useStore } from "vuex";
// 全局权限管理
import checkAccess from "../access/checkAccess";
import ACCESS_ENUM from "../access/accessEnum";
//**全局权限管理[调用实现部分]
const router = useRouter();
// 展示在菜单的路由数组
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    // if (item.meta?.hideInMenu) {
    //   return false;
    // }
    // 根据权限过滤菜单
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});
//**Vue路由[实现代码部分]
//默认主页
const selectedKeys = ref(["/"]);
//路由跳转后，更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
//**全局状态管理[实现代码]
const store = useStore();

setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "管理员",
    userRole: ACCESS_ENUM.ADMIN,
  });
}, 3000);
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}

.logo {
  height: 40px;
}
</style>
