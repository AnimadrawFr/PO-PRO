<template>
  <div id="tools" class="page_template">
    <TopBar />
    <SideBar />
    <div class="container">
      <h1>Les outils</h1>
      <p>Lorem ipsum</p>
      <div class="row-4 mt-40">
        <ToolsCard
          v-for="tool in tools"
          :key="tool.title"
          :image="require('../assets/sample_img.png')"
          :title="tool.title"
          :to="tool.to"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import ToolsCard from "@/components/ToolsCard";

export default {
  components: {
    TopBar,
    SideBar,
    ToolsCard,
  },
  data() {
    return {
      tools: [
        {
          img: "../assets/sample_img.png",
          title: "Enregistrer des types de prestations",
          to: 'prestations'
        },
        {
          img: "../assets/sample_img.png",
          title: "Lier un compte sumup",
          to: '#'
        },
        {
          img: "../assets/sample_img.png",
          title: "Inspirations photos",
          to: 'inspiration'
        },
        {
          img: "../assets/sample_img.png",
          title: "Gestion des stocks",
          to: '#'
        },
        {
          img: "../assets/sample_img.png",
          title: "Lier un reseau social",
          to: '#'
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#tools {
}
</style>