<template>
  <div id="prestations" class="page_template">
    <TopBar />
    <SideBar />
    <div class="container">
      <h1 class="title">Liste des prestations</h1>
      <p class="subTitle">Lorem ipsum</p>
      <div class="row-2">
        <div class="col-left">
          <h3>Les prestations :</h3>
          <div class="addPrestation">
            <input
              type="text"
              name=""
              id=""
              placeholder="Nom de la prestation"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Prix de la prestation"
            />
            <button class="btn btn-primary">Ajouter</button>
          </div>
          <div class="prestation-card mt-20">
            <p>Nom de la prestation</p>
            <div>
              <div class="tooltip">40.00€</div>
              <a href="#" class="icon fas fa-pen"></a>
              <a href="#" class="icon fas fa-trash"></a>
            </div>
          </div>
        </div>
        <div>
          <h3>Les décorations :</h3>
          <div class="addDecoration">
            <input
              type="text"
              name=""
              id=""
              placeholder="Nom de la décoration"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Prix de la décoration"
            />
            <button class="btn btn-primary">Ajouter</button>
          </div>
          <div class="prestation-card mt-20">
            <p>Nom de la décoration</p>
            <div>
              <div class="tooltip">2.00€</div>
              <a href="#" class="icon fas fa-pen"></a>
              <a href="#" class="icon fas fa-trash"></a>
            </div>
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
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#prestations {
  h3 {
    color: $primary;
    margin-top: 40px;
  }
  .col-left {
    border-right: 2px solid $primary;
  }
  .addPrestation,
  .addDecoration {
    width: 98%;
    margin: 0px;
    padding: 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 1200px) {
      flex-direction: row;
    }
    input {
      width: 80%;
      margin: 10px 10px;
    }
    button {
      margin: 5px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .prestation-card {
    background-color: $black;
    border-radius: 5px;
    height: 60px;
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    p {
      margin-left: 10px;
      color: $white;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .tooltip {
        background-color: $primary;
        color: $white;
        padding: 10px 10px;
        border-radius: 5px;
        margin-top: 5px;
        text-align: center;
      }
      .icon {
        color: $primary !important;
        margin: 0 10px;
      }
    }
  }
}
</style>