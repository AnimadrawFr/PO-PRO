<template>
  <div id="dashboard">
    <TopBar />
    <SideBar />
    <div class="container">
      <h1>Tableau de bord</h1>
      <p>
        En un coup d'œil, retrouvez toutes les informations utiles à votre salon
      </p>
      <div class="row-3 mt-40">
        <div class="col">
          <Card
            v-for="(el, i) in funcs[0]"
            :key="i"
            :icon="el.icon"
            :title="el.name"
            :opened="true"
            :content="el.content"
          >
          </Card>
        </div>

        <div class="col">
          <Card
            v-for="(el, i) in funcs[1]"
            :key="i"
            :icon="el.icon"
            :title="el.name"
            :opened="true"
            :content="el.content"
          >
          </Card>
        </div>

        <div class="col">
          <Card
            v-for="(el, i) in funcs[2]"
            :key="i"
            :icon="el.icon"
            :title="el.name"
            :opened="true"
            :content="el.content"
          >
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import Card from "@/components/Card";
import Test from "@/components/Test";

export default {
  data() {
    return {
      funcs: [
        [
          // 0
          {
            id: 1,
            name: "D'un coup d'oeil",
            icon: "far fa-eye",
            content: Test,
          }, // 0.0
          {
            id: 2,
            name: "Dernière activité",
            icon: "fas fa-chart-bar",
            content: Test,
          }, // 0.1
          {
            id: 3,
            name: "Quelques chiffres",
            icon: "fas fa-coins",
            content: Test,
          }, // 0.2
        ],

        [
          // 1
          {
            id: 4,
            name: "Mises à jours",
            icon: "fas fa-coins",
            content: Test,
          }, // 1.0
        ],

        [
          // 2
          {
            id: 5,
            name: "Bloc note",
            icon: "far fa-sticky-note",
            content: Test,
          }, // 2.0
        ],
      ],
    };
  },
  components: {
    TopBar,
    SideBar,
    Card,
    Test,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#dashboard {
  display: flex;
  align-items: flex-start;
  width: 100%;
  .col {
    bid: 1px dashed rgba($black, 0.2);
    padding: 0;
  }
}
</style>