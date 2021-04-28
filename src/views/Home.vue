<template>
  <el-container>
    <el-aside width="200px"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import CommonHeader from '@/components/CommonHeader.vue'
import CommonAside from '@/components/CommonAside.vue'

export default {
  name: "Home",
  components: {
    CommonHeader,
    CommonAside
  },
};
</script>

<style>
</style>
