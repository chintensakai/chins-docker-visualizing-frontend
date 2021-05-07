<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      :index="'' + index"
      v-for="(item, index) in hasChildren"
      :key="index"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path"
          v-for="(subItem, subIndex) in item.children"
          :key="subIndex"
          @click="clickMenu(subItem)"
          >{{ subItem.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      asideMenu: [
        {
          path: "/",
          label: "首页",
          icon: "location",
        },
        {
          label: "容器管理",
          icon: "location",
          children: [
            {
              path: "/containers",
              label: "容器列表",
              icon: "location",
            },
            {
              path: "/container-op",
              label: "容器操作",
              icon: "location",
            },
          ],
        },
        {
          label: "镜像管理",
          icon: "location",
          children: [
            {
              path: "/images",
              label: "镜像列表",
              icon: "location",
            },
            {
              path: "/image-op",
              label: "镜像列表",
              icon: "location",
            },
          ],
        },
      ],
    };
  },
  computed: {
    noChildren() {
      return this.asideMenu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.asideMenu.filter((item) => item.children);
    },
  },
  methods: {
    clickMenu(val) {
      this.$store.commit("selectMenu", val);
    },
  },
};
</script>

<style scoped>
.el-menu {
  height: 100%;
  border: none;
}
</style>