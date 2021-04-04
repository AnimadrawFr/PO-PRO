<template>
  <div id="tools" class="page_template">
    <TopBar />
    <SideBar />
    <div class="container">
      <h1 class="title">Les outils</h1>
      <p class="subTitle">Lorem ipsum</p>
      <div class="row-4 mt-40 tools-list">
        <ToolsCard
          v-for="tool in tools"
          :key="tool.title"
          :icon="tool.icon"
          :color="tool.color"
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
          icon: 'fas fa-paint-brush',
          color: 'lightBlue',
          title: "Types de prestations",
          to: 'prestations'
        },
        {
          icon: 'fas fa-cash-register',
          color: 'lightGreen',
          title: "Lier un TPE",
          to: '#'
        },
        {
          icon: 'far fa-images',
          color: 'lightYellow',
          title: "Inspirations photos",
          to: 'inspiration'
        },
        {
          icon: 'fas fa-archive',
          color: 'lightPink',
          title: "Mes stocks",
          to: '#'
        },
        {
          icon: 'far fa-calendar-alt',
          color: 'primary',
          title: "Mon agenda",
          to: '#'
        },
        {
          icon: 'fas fa-book',
          color: 'red',
          title: "Mon book photo",
          to: '#'
        },
        {
          icon: 'far fa-address-card',
          color: 'darkPurple',
          title: "Cartes de fidelités",
          to: '#'
        },
        {
          icon: 'fas fa-gift',
          color: 'orange',
          title: "Cartes cadeaux",
          to: '#'
        },
        {
          icon: 'fas fa-envelope-open-text',
          color: 'green',
          title: "Mes mails",
          to: '#'
        },
        {
          icon: 'fab fa-facebook-square',
          color: 'darkBlue',
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

.tools-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}
</style>