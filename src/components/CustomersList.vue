<template>
  <table>
    <thead>
      <tr>
        <td>Nom / Prénom</td>
        <td>Inscrit le</td>
        <td>Dernière visite le</td>
        <td>Prochain rendez-vous</td>
        <td>Points de fidelités</td>
        <td>Contact</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <router-link :to="'singleCustomer'"> GEORGE Amandine </router-link>
        </td>
        <td>04/04/2021</td>
        <td>05/04/2021</td>
        <td>-</td>
        <td>1 pts</td>
        <td>
          <i class="icon fas fa-phone"></i>
          <i class="icon fas fa-envelope"></i>
        </td>
      </tr>
      <tr>
        <td><a href="#">GEORGE Amandine</a></td>
        <td>04/04/2021</td>
        <td>05/04/2021</td>
        <td>25/04/2021</td>
        <td>3 pts</td>
        <td>
          <i class="icon fas fa-phone"></i>
          <i class="icon fas fa-envelope"></i>
        </td>
      </tr>
      <tr>
        <td><a href="#">GEORGE Amandine</a></td>
        <td>04/04/2021</td>
        <td>05/04/2021</td>
        <td>25/04/2021</td>
        <td>3 pts</td>
        <td>
          <i class="icon fas fa-phone"></i>
          <i class="icon fas fa-envelope"></i>
        </td>
      </tr>
      <tr>
        <td><a href="#">GEORGE Amandine</a></td>
        <td>04/04/2021</td>
        <td>05/04/2021</td>
        <td>25/04/2021</td>
        <td>3 pts</td>
        <td>
          <i class="icon fas fa-phone"></i>
          <i class="icon fas fa-envelope"></i>
        </td>
      </tr>
      <tr>
        <td><a href="#">GEORGE Amandine</a></td>
        <td>04/04/2021</td>
        <td>05/04/2021</td>
        <td>25/04/2021</td>
        <td>3 pts</td>
        <td>
          <i class="icon fas fa-phone"></i>
          <i class="icon fas fa-envelope"></i>
        </td>
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