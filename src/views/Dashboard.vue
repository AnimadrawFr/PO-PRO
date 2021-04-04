<template>
  <div id="dashboard" class="page_template">
    <TopBar />
    <SideBar />
    <div class="container">
      <h1 class="title">Tableau de bord</h1>
      <p class="subTitle">
        En un coup d'œil, retrouvez toutes les informations utiles à votre salon
      </p>
      <div class="row-1 mt-40">
        <div class="col">
          <Card
            :icon="items[0].icon"
            :title="items[0].name"
            :opened="true"
            :content="items[0].content"
            :headerShowed="true"
          >
          </Card>
        </div>
      </div>
      <div class="row-2-1 mt-10">
        <div class="col">
          <Card
            :icon="items[1].icon"
            :title="items[1].name"
            :opened="true"
            :content="items[1].content"
            :headerShowed="true"
          >
          </Card>
        </div>
        <div class="col">
          <Card
            :icon="items[2].icon"
            :title="items[2].name"
            :opened="true"
            :content="items[2].content"
            :headerShowed="true"
          >
          </Card>
        </div>
      </div>
      <div class="row-1-2 mt-10">
        <div class="col">
          <Card
            :icon="items[3].icon"
            :title="items[3].name"
            :opened="true"
            :content="items[3].content"
            :headerShowed="true"
          >
          </Card>
        </div>
        <div class="col">
          <Card
            :icon="items[4].icon"
            :title="items[4].name"
            :opened="true"
            :content="items[4].content"
            :headerShowed="true"
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
import Glance from "@/components/Dashboard/Glance";
import Activity from "@/components/Dashboard/Activity";
import MAJ from "@/components/Dashboard/MAJ";
import ToDoList from "@/components/Dashboard/ToDoList";
import Stats from "@/components/Dashboard/Stats";
import latestCustomers from "@/components/Dashboard/LatestCustomers";
import LastRendezVous from "../components/Dashboard/LastRendezVous.vue";

export default {
  components: {
    TopBar,
    SideBar,
    Card,
    Stats,
    Glance,
    Activity,
    MAJ,
    ToDoList,
    latestCustomers,
    LastRendezVous,
  },
  data() {
    return {
      itemDrag: false,
      items: [
        {
          id: 0,
          name: "D'un coup d'oeil",
          icon: "far fa-eye",
          list: 1,
          content: Glance,
        },
        {
          id: 1,
          name: "Dernières clientes enregistrées",
          icon: "far fa-user",
          list: 1,
          content: latestCustomers,
        },
        {
          id: 2,
          name: "3 prochains rendez-vous",
          icon: "far fa-calendar",
          list: 1,
          content: LastRendezVous,
        },
        {
          id: 4,
          name: "ToDoList",
          icon: "far fa-sticky-note",
          list: 1,
          content: ToDoList,
        },
        {
          id: 4,
          name: "Quelques chiffres",
          icon: "fas fa-calculator",
          list: 1,
          content: Stats,
        },
      ],
    };
  },
  computed: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#dashboard {
  .col {
    &.dashed {
      border: 1px dashed rgba($black, 0.5);
    }
  }
}
</style>