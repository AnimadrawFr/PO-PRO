<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
  name: "App",
  components: {
    SideBar,
  },
  data: () => ({
    SideBarActive: localStorage.getItem('sidebar') ? JSON.parse(localStorage.getItem('sidebar')) : true
  }),
};
</script>

<style lang="scss">

</style>
