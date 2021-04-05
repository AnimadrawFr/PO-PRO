<template>
  <div id="singleCustomer" class="page_template">
    <TopBar />
    <SideBar />
    <div class="container">
      <h1 class="title">Fiche cliente</h1>
      <p class="subTitle">
        Lorem ipsum
      </p>
      <div class="row-1-2">
        <div class="col">
          <Card 
            :icon="items[0].icon"
            :title="items[0].name"
            :opened="true"
            :content="items[0].content"
            :headerShowed="true"
          />
        </div>
        <div class="col">
          <Card 
            :icon="items[2].icon"
            :title="items[2].name"
            :opened="true"
            :content="items[2].content"
            :headerShowed="true"
          />
        </div>
      </div>
      <div class="row-1">
        <div class="col">
          <Card 
            :icon="items[1].icon"
            :title="items[1].name"
            :opened="true"
            :content="items[1].content"
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
import CustomerSheet from "@/components/CustomerSheet";
import CustomerPrestations from "@/components/CustomerPrestations";
import CustomerFirstSheet from "@/components/CustomerFirstSheet";




export default {
  components: {
    SideBar,
    TopBar,
    Card,
    CustomerSheet,
    CustomerPrestations,
    CustomerFirstSheet
  },
  data() {
    return {
      items: [
        {
          id: 0,
          name: "Informations générales",
          icon: "far fa-eye",
          list: 1,
          content: CustomerSheet,
        },
        {
          id: 1,
          name: "Liste des prestations",
          icon: "far fa-eye",
          list: 1,
          content: CustomerPrestations,
        },
        {
          id: 2,
          name: "Fiche générale",
          icon: "far fa-eye",
          list: 1,
          content: CustomerFirstSheet,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#singleCustomer {
  #customer-informations {
    min-height: 120px;
    width: 25%;
    background-color: $white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    .last_prestation {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid $primary;
    }
    div {
      p:nth-child(1) {
        font-size: 20px;
        margin-bottom: 5px;
      }
      p:nth-child(2) {
        color: $primary;
        font-size: 14px;
      }
    }
  }
  .customer-last {
    min-height: 120px;
    background-color: $white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
  }
  .customer-contact {
    min-height: 120px;
    background-color: $white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
  }
  .row-2 {
    grid-template-columns: 1fr 2fr;
  }
}

#customers-list {
  .customer-card {
    width: 100%;
    min-height: 50px;
    background-color: $white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
    margin: 10px 0;
    .last_prestation {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid $primary;
    }
  }
}
</style>