<template>
  <div id="gallery" class="page_template">
    <TopBar />
    <SideBar />
    <div class="container">
      <h1>Inspiration</h1>
      <p>Lorem ipsum</p>

    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

export default {
  components: {
    TopBar,
    SideBar
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

.grid {
  column-count: 3;
  column-gap: 5px;

  img {
    width: 100%;
    max-width: 100%;
    display: block;
    opacity: 1;
    transform: scale(1);
    transition: 0.5s ease;
    margin-bottom: 5px;
  }
}

@keyframes grow {
  from {
    -moz-transform: scale(0, 0);
    -ms-transform: scale(0, 0);
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
  }
  to {
    -moz-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}
</style>