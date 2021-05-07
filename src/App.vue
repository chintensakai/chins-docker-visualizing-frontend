<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
export default {
  components: {
    Home,
  },
};
</script>
<style scoped>
#app {
  height: 100vh;
}
</style>

<style>
body {
  margin: 0;
}
#app .el-container {
  height: 100%;
}
</style>