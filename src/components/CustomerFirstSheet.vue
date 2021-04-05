<template>
  <table>
    <thead>
      <tr>
        <td>Intitulé</td>
        <td>Description</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Date du 1er rendez-vous</td>
        <td>05/04/2021</td>
      </tr>
      <tr>
        <td>Observation au 1er rendez-vous</td>
        <td>Lorem ipsum dolor</td>
      </tr>
      <tr>
        <td>Nature des ongles</td>
        <td>Rongés</td>
      </tr>
      <tr>
        <td>Type de peau</td>
        <td>Normale</td>
      </tr>
      <tr>
        <td>Forme cuticules</td>
        <td>Ovale</td>
      </tr>
      <tr>
        <td>Metier</td>
        <td>Serveuse</td>
      </tr>
      <tr>
        <td>Sport pratiqué</td>
        <td>Aucun</td>
      </tr>
      <tr>
        <td>Fumeuse ?</td>
        <td>Non</td>
      </tr>
      <tr>
        <td>Médicaments ?</td>
        <td>Non</td>
      </tr>
      <tr>
        <td>Enceinte ?</td>
        <td>Non</td>
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