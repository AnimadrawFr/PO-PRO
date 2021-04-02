<template>
  <div id="addCustomerPrestation" class="page_template">
    <TopBar />
    <SideBar />
    <div class="container">
      <h1>Ajouter une préstation pour : <b>Nom, prénom</b></h1>
      <div class="addPrestation mt-40">
        <div>
          <input type="text" name="" id="" placeholder="Date de la pose" />
        </div>
        <div>
          <select name="" id="">
            <option value="">Type de prestation</option>
          </select>
          <select name="" id="">
            <option value="">Type de décoration</option>
          </select>
          <select name="" id="">
            <option value="">Remise</option>
          </select>
        </div>
        <textarea name="" id="" placeholder="Commentaire" class="mt-10">
        </textarea>
        <button class="btn btn-primary mt-40">Ajouter la prestation</button>
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
  .addPrestation {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    input {
      margin: 10px 0;
    }
    select {
      width: 250px;
    }
    textarea {
      width: 50%;
      min-height: 120px;
      padding: 10px;
      background-color: $white;
      font-size: 16px;
      border-color: $lightGrey;
    }
  }
}


</style>