<template>
  <div id="stats">
    <month-picker-input
      lang="fr"
      :default-month="3"
      :default-year="2021"
      :max-date="new Date()"
      input-pre-filled
    />
    <div class="content">
      <div class="el">
        <h3>+1</h3>
        <p>Nouvelle cliente</p>
      </div>
      <div class="el">
        <h3>370.00 €</h3>
        <p>De chiffre ce mois</p>
      </div>
      <div class="el">
        <h3>120.00 €</h3>
        <p>Paiements en espèce</p>
      </div>
      <div class="el">
        <h3>130.00 €</h3>
        <p>Paiements CB</p>
      </div>
      <div class="el">
        <h3>100.00 €</h3>
        <p>Paiements chèques</p>
      </div>
      <div class="el">
        <h3>20.00 €</h3>
        <p>Cartes cadeau</p>
      </div>
    </div>
  </div>
</template>

<script>
import { MonthPickerInput } from "vue-month-picker";

export default {
  components: {
    MonthPickerInput,
  },
};
</script>

<style lang="scss">
@import "@/style/style.scss";

#stats {
  .month-picker-input-container[data-v-201d773d] {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .month-picker-input {
      width: 100%;
      background-color: $primary;
      border-radius: 0;
      padding: 5px;
      max-height: 35px !important;
      border-radius: 10px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $white;
      text-align: center;
      bottom: 100px;
      margin-top: 0;
      font-size: 1.2rem;
      cursor: pointer;
    }
    .month-picker__container {
      width: 100%;
      position: absolute;
      z-index: 1;
      background-color: $background;
      margin-bottom: 80px;
      border: none;
    }
    .month-picker__year {
      background-color: $background;
      color: $white;
      border-bottom: 1px solid $white;
      margin-bottom: 20px;
      button {
        background-color: $primary;
        color: $white;
        border: none;
        &:hover {
          background-color: $black;
        }
      }
    }
    .month-picker__month {
      background-color: $black;
      color: $white;
      border: none;
      border: 1px solid rgba($white, 0.2);
      &:hover {
        background-color: $primary;
      }
      &.selected {
        background-color: $primary;
        border-radius: 0;
      }
      &.inactive {
        background-color: $background;
      }
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    .el {
      background-color: $background;
      padding: 10px;
      margin: 10px;
      text-align: center;
      border-radius: 10px;
      width: 150px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      h3 {
        color: $primary;
        font-size: 1.2rem;
        margin-bottom: 5px;
      }
      p {
        font-size: 0.8rem;
        color: $white;
      }
    }
  }
}
</style>