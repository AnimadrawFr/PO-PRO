<template>
  <div id="latestCustomers">
    <table>
      <thead>
        <tr>
          <td>Dernière pose</td>
          <td>Nom / prénom</td>
          <td>Prestation</td>
          <td>Prix</td>
          <td>Paiement</td>
          <td>Informations</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img class="lastPicture" src="../../assets/sample_img.png" alt="" />
          </td>
          <td>GEORGE Amandine</td>
          <td>Chablon / Nail art</td>
          <td>35.00 €</td>
          <td><i class="fas fa-money-check-alt"></i></td>
          <td>
            <div class="icons">
              <i class="icon fas fa-phone"></i>
              <i class="icon fas fa-envelope"></i>
              <i class="icon far fa-edit"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <img class="lastPicture" src="../../assets/sample_img.png" alt="" />
          </td>
          <td>GEORGE Amandine</td>
          <td>Chablon / Nail art</td>
          <td>35.00 €</td>
          <td><i class="fas fa-money-bill-wave"></i></td>
          <td>
            <div class="icons">
              <i class="icon fas fa-phone"></i>
              <i class="icon fas fa-envelope"></i>
              <i class="icon far fa-edit"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <img class="lastPicture" src="../../assets/sample_img.png" alt="" />
          </td>
          <td>GEORGE Amandine</td>
          <td>Chablon / Nail art</td>
          <td>35.00 €</td>
          <td><i class="far fa-credit-card"></i></td>
          <td>
            <div class="icons">
              <i class="icon fas fa-phone"></i>
              <i class="icon fas fa-envelope"></i>
              <i class="icon far fa-edit"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <img class="lastPicture" src="../../assets/sample_img.png" alt="" />
          </td>
          <td>GEORGE Amandine</td>
          <td>Chablon / Nail art</td>
          <td>35.00 €</td>
          <td><i class="far fa-money-bill-wave"></i></td>
          <td>
            <div class="icons">
              <i class="icon fas fa-phone"></i>
              <i class="icon fas fa-envelope"></i>
              <i class="icon far fa-edit"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <img class="lastPicture" src="../../assets/sample_img.png" alt="" />
          </td>
          <td>GEORGE Amandine</td>
          <td>Chablon / Nail art</td>
          <td>35.00 €</td>
          <td><i class="far fa-credit-card"></i></td>
          <td>
            <div class="icons">
              <i class="icon fas fa-phone"></i>
              <i class="icon fas fa-envelope"></i>
              <i class="icon far fa-edit"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <img class="lastPicture" src="../../assets/sample_img.png" alt="" />
          </td>
          <td>NOM prénom</td>
          <td>Chablon / Nail art</td>
          <td>35.00 €</td>
          <td><i class="far fa-credit-card"></i></td>
          <td>
            <div class="icons">
              <i class="icon fas fa-phone"></i>
              <i class="icon fas fa-envelope"></i>
              <i class="icon far fa-edit"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
    td {
      text-align: center;
      padding: 10px;
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
.lastPicture {
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 1px solid $primary;
}
</style>