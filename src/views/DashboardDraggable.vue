<template>
  <div id="dashboard" class="page_template">
    <TopBar />
    <SideBar />
    <div class="container">
      <h1 class="title">Tableau de bord</h1>
      <p class="subTitle">
        En un coup d'œil, retrouvez toutes les informations utiles à votre salon
      </p>
      <div class="row-3 mt-40">
        <div
          class="col drop-zone"
          :class="itemDrag ? 'dashed' : ''"
          @drop="onDrop($event, 1)"
          @dragover.prevent
          @dragenter.prevent
        >
          <Card
            v-for="el in listOne"
            :key="el.name"
            :icon="el.icon"
            :title="el.name"
            :opened="true"
            :content="el.content"
            class="drag-el"
            draggable
            @dragstart="startDrag($event, el)"
            @dragend="endDrag()"
          >
          </Card>
        </div>

        <div
          class="col drop-zone"
          :class="itemDrag ? 'dashed' : ''"
          @drop="onDrop($event, 2)"
          @dragover.prevent
          @dragenter.prevent
        >
          <Card
            v-for="el in listTwo"
            :key="el.name"
            :icon="el.icon"
            :title="el.name"
            :opened="true"
            :content="el.content"
            class="drag-el"
            draggable
            @dragstart="startDrag($event, el)"
            @dragend="endDrag()"
          >
          </Card>
        </div>

        <div
          class="col drop-zone"
          :class="itemDrag ? 'dashed' : ''"
          @drop="onDrop($event, 3)"
          @dragover.prevent
          @dragenter.prevent
        >
          <Card
            v-for="el in listThree"
            :key="el.name"
            :icon="el.icon"
            :title="el.name"
            :opened="true"
            :content="el.content"
            class="drag-el"
            draggable
            @dragstart="startDrag($event, el)"
            @dragend="endDrag()"
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
import Notepad from "@/components/Dashboard/Notepad";
import Stats from "@/components/Dashboard/Stats";

export default {
  components: {
    TopBar,
    SideBar,
    Card,
    Stats,
    Glance,
    Activity,
    MAJ,
    Notepad
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
          name: "Dernière activité",
          icon: "fas fa-chart-bar",
          content: Activity,
          list: 1,
        },
        {
          id: 2,
          name: "Quelques chiffres",
          icon: "fas fa-coins",
          content: Stats,
          list: 2,
        },
        {
          id: 3,
          name: "Mises à jours",
          icon: "fas fa-coins",
          content: MAJ,
          list: 2,
        },
        {
          id: 4,
          name: "Bloc note",
          icon: "far fa-sticky-note",
          content: Notepad,
          list: 3,
        }
      ],
    };
  },
  methods: {
    startDrag(evt, item) {
      this.itemDrag = true
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },
    endDrag() {
      this.itemDrag = false
    },
    onDrop(evt, list) {
      this.itemDrag = false
      let order = [];
      const itemID = evt.dataTransfer.getData("itemID");

      const item = this.items.find((item) => item.id == itemID);
      console.log(item);
      item.list = list;

      this.items.forEach((e) => {
        order.push(e.list);
      });

      localStorage.setItem("dashboard-order", JSON.stringify(order));
      console.log(order);
    },
  },
  created() {
    let orderStorage = localStorage.getItem("dashboard-order");
    if (orderStorage) {
      if (JSON.parse(orderStorage).length !== this.items.length) {
        console.log("il y a une mise a jour");

        let newOrder = JSON.parse(orderStorage);

        if (JSON.parse(orderStorage).length > this.items.length) {
          for (
            let i = this.items.length;
            i < JSON.parse(orderStorage).length;
            i++
          ) {
            newOrder.pop();
            this.items.forEach((e, i) => {
              e.list = newOrder[i];
            });
          }
          localStorage.setItem("dashboard-order", JSON.stringify(newOrder));
        } else if (JSON.parse(orderStorage).length < this.items.length) {
          for (
            let i = JSON.parse(orderStorage).length;
            i < this.items.length;
            i++
          ) {
            newOrder.push(3);
            this.items.forEach((e, i) => {
              e.list = newOrder[i];
            });
          }
          localStorage.setItem("dashboard-order", JSON.stringify(newOrder));
        }

        console.log(localStorage.getItem("dashboard-order"));
      } else {
        console.log("pas de mise a jour");
        let order = JSON.parse(orderStorage);

        this.items.forEach((e, i) => {
          e.list = order[i];
        });
      }
    }
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1);
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2);
    },
    listThree() {
      return this.items.filter((item) => item.list === 3);
    },
  },
  mounted() {

  }
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#dashboard {
  .col {
    
    padding: 5px;
    &.dashed {
      border: 1px dashed rgba($black, 0.5);
    }
  }
}
</style>