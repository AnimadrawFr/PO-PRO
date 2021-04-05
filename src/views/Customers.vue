<template>
  <div id="customers" class="page_template">
    <TopBar />
    <SideBar />
    <div class="container">
      <h1 class="title">Mes clientes</h1>
      <p class="subTitle">Lorem ipsum</p>
      <div id="customers-search" class="mt-40">
        <input type="text" name="" id="" />
        <button class="btn btn-primary">Rechercher</button>
      </div>
      <div class="row-1">
        <div class="col">
          <router-link :to="'addCustomer'" tag="button" class="addButton btn btn-primary">
            Ajouter une cliente
          </router-link>
          <Card
            :title="table[0].name"
            :icon="table[0].icon"
            :opened="true"
            :content="table[0].content"
            :headerShowed="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import Card from "@/components/Card";
import CustomersList from "@/components/CustomersList";

export default {
  components: {
    SideBar,
    TopBar,
    Card,
    CustomersList,
  },
  data() {
    return {
      table: [
        {
          id: 0,
          name: "Liste des clientes",
          icon: "far fa-eye",
          list: 1,
          content: CustomersList,
        },
      ],
    };
  },
  methods: {
    sort_A_Z() {
      this.customers.sort((a, b) => {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 0;
        }
        return 0;
      });
    },
    sort_Z_A() {
      this.customers.sort((a, b) => {
        if (a.firstName < b.firstName) {
          return 0;
        }
        if (a.firstName > b.firstName) {
          return -1;
        }
        return 0;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#customers {
  width: 100%;
  #customers-search {
    width: 98%;
    input[type="text"] {
      width: 80%;
    }
    .btn {
      height: 50px;
      width: 20%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #customers-filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .filters {
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        margin: 0 5px;
        &.active {
          background-color: $darkGrey;
        }
      }
    }
  }
}
.addButton {
  margin-left: 10px;
}
</style>