<template>
  <div id="addCustomer" class="page_template">
    <TopBar />
    <SideBar />
    <div class="container">
      <h1 class="title">Ajouter une cliente</h1>
      <p class="subTitle">Créez une fiche cliente en remplissant ce formulaire</p>

      <div class="row-2 mt-40">
        <div class="personnalInformations">
          <h2>Informations personnelles :</h2>
          <div class="form mt-10 mb-20">
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prénom" />
            <input type="text" placeholder="Date de naissance" />
            <input type="text" placeholder="Profession" />
          </div>
          <h2>Informations de contact :</h2>
          <div class="form mt-10 mb-20">
            <input type="text" placeholder="Adresse" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Téléphone" />
          </div>
          <h2>Autres informations :</h2>
          <div class="form mt-10 mb-20">
            <input type="text" placeholder="Connue grâce à ?" />
            <input type="text" placeholder="Méthode de contact" />
          </div>
        </div>
        <div class="generalInfomations">
          <h2>Informations générales :</h2>

          <p class="mt-40">Aspect des mains :</p>
          <div class="form mt-10 mb-20s">
            <select name="" id="">
              <option value="null">Longueur</option>
            </select>
            <select name="" id="">
              <option value="null">Largeur</option>
            </select>
          </div>

          <p class="mt-40">Aspect des ongles :</p>
          <div class="form mt-10 mb-20s">
            <select name="" id="">
              <option value="null">Coloration</option>
            </select>
            <select name="" id="">
              <option value="null">Courbe</option>
            </select>
            <select name="" id="">
              <option value="null">Longueur</option>
            </select>
            <select name="" id="">
              <option value="null">Forme</option>
            </select>
          </div>

          <p class="mt-40">Autre :</p>
          <div class="form mt-10 mb-20s">
            <select name="" id="">
              <option value="null">Anomalies</option>
            </select>
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

#addCustomer {
  h2 {
    color: $primary;
    font-size: 18px;
  }
  .personnalInformations {
      border-right: 2px solid $primary;
      padding-right: 20px;
  }
  .personnalInformations,
  .generalInfomations {
    color: $primary;
    .form {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      input {
        width: 100%;
      }
      div {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>