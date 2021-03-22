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
        <draggable class="col" :list="cols.first" group="test" @change="log">
          <Card
            v-for="el in cols.first"
            :key="el.id"
            :icon="el.icon"
            :title="el.name"
            :opened="true"
            :content="el.content"
          >

          </Card>
        </draggable>

        <draggable class="col" :list="cols.second" group="test" @change="log">
          <Card
            v-for="el in cols.second"
            :key="el.id"
            :icon="el.icon"
            :title="el.name"
            :opened="true"
            :content="el.content"
          >
            
          </Card>
        </draggable>

        <draggable class="col" :list="cols.third" group="test" @change="log">
          <Card
            v-for="el in cols.third"
            :key="el.id"
            :icon="el.icon"
            :title="el.name"
            :opened="true"
            :content="el.content"
          >
          </Card>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import Card from "@/components/Card";
import Test from "@/components/Test";

export default {
  data() {
    return {
      cols: {
        first: [
          {
            id: 1,
            name: "D'un coup d'oeil",
            icon: "far fa-eye",
            content: Test,
          },
          { id: 2, name: "Dernière activité", icon: "fas fa-chart-bar" },
          { id: 6, name: "Quelques chiffres", icon: "fas fa-coins" },
        ],

        second: [{ id: 5, name: "Mises à jours", icon: "fas fa-coins" }],
        third: [{ id: 7, name: "Bloc note", icon: "far fa-sticky-note" }],
      },
    };
  },
  components: {
    draggable,
    TopBar,
    SideBar,
    Card,
    Test
  },
  mounted() {
    if (localStorage.getItem("dashboard-order")) {
      //this.cols = JSON.parse(localStorage.getItem("dashboard-order"));
    }
  },
  methods: {
    log(e) {
      console.log(this.cols)
      localStorage.setItem("dashboard-order", JSON.stringify(this.cols));
    },
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
    border: 1px dashed rgba($black, 0.2);
    padding: 0;
  }
}
</style>