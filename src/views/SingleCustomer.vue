<template>
  <div id="singleCustomer" class="page_template">
    <TopBar />
    <SideBar />
    <div class="container">
      <div id="customer-informations" class="mb-20">
        <img
          class="last_prestation"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
        />
        <div>
          <p>Nom, Prénom</p>
          <p>Dernière visite: 21/03/2021</p>
        </div>
      </div>
      <div class="row-2 mb-20">
        <div class="customer-last">
          <div class="first-visit">
            <p>Première visite :</p>
            <div class="tooltip">21/03/2021</div>
          </div>
          <div class="last-prestation">
            <p>Dernière prestation :</p>
            <div class="tooltip">21/03/2021</div>
          </div>
        </div>
        <div class="customer-contact">
          <div class="customer-phone">
            <p>Tél :</p>
            <div class="tooltip">0749217012</div>
          </div>
          <div class="customer-email">
            <p>Email :</p>
            <div class="tooltip">sonEmail@outlook.com</div>
          </div>
          <div class="customer-address">
            <p>Adresse :</p>
            <div class="tooltip">13 rue haute - 55120 - Auzeville</div>
          </div>
        </div>
      </div>

      <router-link to="addCustomerPrestation">
        <button class="btn btn-primary">nouvelle prestation</button>
      </router-link>
      <div id="customers-list" class="mt-40">
        <div class="customer-card">
          <img
            class="last_prestation"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
          />
          <div class="date-visit">
            <p>Date:</p>
            <div class="tooltip">21/03/2021</div>
          </div>
          <div class="prestation-type">
            <p>Prestation:</p>
            <div class="tooltip">Réparation, Chablon</div>
          </div>
          <div class="decoration-type">
            <p>Décoration:</p>
            <div class="tooltip">Nail art</div>
          </div>
          <div class="comment">
            <p>Commentaire:</p>
            <div class="tooltip">Lorem ipsum</div>
          </div>
          <div class="sepp">

          </div>
          <div class="ht-total">
            <p>Total (ht):</p>
            <div class="tooltip">40.00€</div>
          </div>
          <div class="remise">
            <p>Remise:</p>
            <div class="tooltip">5 %</div>
          </div>
          <div class="ttc-total">
            <p>Total (ttc):</p>
            <div class="tooltip">35.00€</div>
          </div>
        </div>
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
    return {};
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