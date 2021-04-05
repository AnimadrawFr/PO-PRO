<template>
  <table>
    <thead>
      <tr>
        <td>Prestation</td>
        <td>Décoration</td>
        <td>Date de pose</td>
        <td>Tarif</td>
        <td>Remise</td>
        <td>Total</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Chablon</td>
        <td>Nail art plume</td>
        <td>05/04/2021</td>
        <td>45.00 €</td>
        <td>-</td>
        <td>45.00 €</td>
      </tr>
      <tr>
        <td>Chablon</td>
        <td>Nail art plume</td>
        <td>05/04/2021</td>
        <td>45.00 €</td>
        <td>-</td>
        <td>45.00 €</td>
      </tr>
      <tr>
        <td>Chablon</td>
        <td>Nail art plume</td>
        <td>05/04/2021</td>
        <td>45.00 €</td>
        <td>-</td>
        <td>45.00 €</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

table {
  width: 100%;
  overflow: auto;
  thead {
    color: $primary;
    background-color: $background;
    tr {
    }
    td {
      text-align: center;
      padding: 10px;
      min-width: 150px;
    }
  }
  tbody {
    color: $white;
    tr {
      &:nth-child(2n + 2) {
        background-color: $darkGrey;
      }
      td {
        text-align: center;
        padding: 10px 0;
        .icon {
          margin: 0 10px;
          cursor: pointer;
          &:hover {
            color: $primary;
          }
        }
      }
    }
  }
}
</style>