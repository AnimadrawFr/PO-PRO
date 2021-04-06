<template>
  <div id="addCustomerPrestation" class="page_template">
    <TopBar />
    <SideBar />
    <div class="container">
      <h1 class="title">Ajouter une prestation</h1>
      <p class="subTitle">Nom / prénom</p>
      <div class="row-1 mt-20">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h3><i class="icon fas fa-eye"></i>Informations générales</h3>
            </div>
            <div class="card-content">
              <div class="input-group">
                <input type="text" name="" id="" placeholder="Date (ex: 10/12/2020)">
                <select name="" id="prestation">
                  <option value="null">Type de prestation</option>
                </select>
                <select name="" id="decorations">
                  <option value="null">Type de décoration</option>
                </select>
                <select name="" id="remise">
                  <option value="null">Remise</option>
                </select>
              </div>
              <div class="comment">
                Ajouter un commentaire :
                <textarea name="" id="comment_area"></textarea>
              </div>
              <button class="btn btn-primary mt-20">
                Ajouter la prestation
              </button>
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

#addCustomerPrestation {
  b {
    color: $primary;
  }

  h2 {
    color: $primary;
    font-size: 18px;
  }
  .input-group {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  select {
    width: 250px;
    border: 1px solid $primary;
  }
  input[type="text"] {
    border: 1px solid $primary;
    height: 20px;
  }
  .comment {
    color: $white;
  }
  textarea {
    margin-top: 20px;
    width: 99.5%;
    height: 200px;
    color: $primary;
    background-color: $background;
    border: 1px solid $primary;
  }
}
</style>