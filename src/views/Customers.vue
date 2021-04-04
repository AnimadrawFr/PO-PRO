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
      <div id="customers-filters" class="mt-20">
        <router-link to="addCustomer">
          <button class="btn btn-primary w-50">Ajouter une cliente</button>
        </router-link>
        <div class="filters">
          <button class="btn btn-primary w-50" @click="sort_A_Z()">
            Nom a-z
          </button>
          <button class="btn btn-primary w-50" @click="sort_Z_A()">
            Nom z-a
          </button>
        </div>
      </div>
      <div id="customers-list" class="mt-40">
        <router-link to="singleCustomer">
          <div
            class="customer-card"
            v-for="customer in customers"
            :key="customer.id"
          >
            <img
              class="last-prestation-picture"
              :src="customer.picture"
              alt=""
            />
            <div class="customer-informations">
              <p>{{ customer.firstName }}</p>
              <p>{{ customer.lastName }}</p>
            </div>
            <div class="first-visit">
              <p>Première visite :</p>
              <div class="tooltip">{{ customer.firstVisit }}</div>
            </div>
            <div class="last-visit">
              <p>Dernière visite :</p>
              <div class="tooltip">{{ customer.lastVisit }}</div>
            </div>
            <div class="last-prestation">
              <p>Dernière prestation :</p>
              <div class="tooltip">
                {{ customer.lastPrestation }} / {{ customer.lastDecoration }}
              </div>
            </div>
            <div id="customer-contacts">
              <a href="#" class="icon fas fa-envelope"></a>
              <a href="#" class="icon fas fa-phone"></a>
              <a href="#" class="icon fas fa-eye"></a>
              <a href="#" class="icon fas fa-trash"></a>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

export default {
  components: {
    SideBar,
    TopBar,
  },
  data() {
    return {
      customers: [
        {
          id: 0,
          firstName: "Béatrice",
          lastName: "Prénom",
          picture: require("../assets/sample_img.png"),
          firstVisit: "21/03/2021",
          lastVisit: "21/03/2021",
          lastPrestation: "Chablon",
          lastDecoration: "Nail art",
          email: "animanails@outlook.fr",
          phone: "0749217012",
          url: "#",
        },
        {
          id: 1,
          firstName: "Amandine",
          lastName: "Prénom",
          picture: require("../assets/sample_img.png"),
          firstVisit: "21/03/2021",
          lastVisit: "16/01/2021",
          lastPrestation: "Chablon",
          lastDecoration: "Nail art",
          email: "animanails@outlook.fr",
          phone: "0749217012",
          url: "#",
        },
        {
          id: 2,
          firstName: "Céline",
          lastName: "Prénom",
          picture: require("../assets/sample_img.png"),
          firstVisit: "21/03/2021",
          lastVisit: "18/03/2021",
          lastPrestation: "Chablon",
          lastDecoration: "Nail art",
          email: "animanails@outlook.fr",
          phone: "0749217012",
          url: "#",
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
  #customers-search {
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
  #customers-list {
    .customer-card {
      width: 100%;
      min-height: 50px;
      background-color: $black;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 10px 0;
      margin: 10px 0;
      font-size: 0.8rem;
      .last-prestation-picture {
        border-radius: 50%;
        height: 50px;
        width: 50px;
        border: 1px solid $primary;
      }
      .customer-informations p:nth-child(1) {
        text-transform: uppercase;
        margin-bottom: 5px;
      }
      .customer-informations p:nth-child(2) {
        color: $primary;
      }
      .tooltip {
        background-color: $background;
        padding: 10px 0;
        border-radius: 5px;
        margin-top: 5px;
        text-align: center;
        color: $white;
      }
      #customer-contacts {
        color: $primary !important;
        font-size: 20px;
        .icon {
          margin: 0 5px;
        }
      }
    }
  }
}
</style>