<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']" :router=true>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-position"></i>管理订单</template>
          <el-menu-item-group>
            <el-menu-item index="/waitForDeliver">待发货</el-menu-item>
            <el-menu-item index="/waitForReceive">待用户收货</el-menu-item>
            <el-menu-item index="/completedOrders">已完成</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
          <el-menu-item-group>
            <el-menu-item index="/bookList">书籍列表</el-menu-item>
            <el-menu-item index="/advice">统计进货建议</el-menu-item>
          </el-menu-item-group>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="quit">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{ username }}</span>
      </el-header>

      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>


</style>

<script>

export default {
  name: "Home",
  data() {
    return {
      waitForDeliver: [],
      waitForReceive: [],
      completedList: [],
      username: null
    }
  },
  methods: {
    quit() {
      this.$cookies.remove("uid")
      this.$cookies.remove("userName")
      this.$router.replace("/login")
    }
  },
  created() {
    this.username = this.$cookies.get("userName")
    if (this.username === null) {
      this.$router.replace("/")
    }
  }
};
</script>