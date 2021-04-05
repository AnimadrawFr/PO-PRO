<template>
  <div id="customerSheet">
    <div class="general">
      <div class="informationsGeneral">
        <div class="picture">
          <img src="../assets/sample_img.png" alt="" />
        </div>
        <div class="infos">
          <h3>Nom / Prénom</h3>
          <p>Date inscription : 05/04/2021</p>
          <div class="actions">
            <button class="btn btn-primary">Editer</button>
            <button class="btn btn-secondary">Supprimer</button>
          </div>
        </div>
      </div>
      <div class="mt-40">
        <table>
          <thead>
            <tr>
              <td>Intitulé</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email</td>
              <td>animanails@gmail.com</td>
            </tr>
            <tr>
              <td>Téléphone</td>
              <td>07.49.21.70.12</td>
            </tr>
            <tr>
              <td>Adresse</td>
              <td>13 rue haute</td>
            </tr>
            <tr>
              <td>Code postal</td>
              <td>55120</td>
            </tr>
            <tr>
              <td>Ville</td>
              <td>Auzeville en argonne</td>
            </tr>
            <tr>
              <td>Dâte de naissance</td>
              <td>10/10/1986</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";
#customerSheet {
  display: flex;
  align-items: center;
  justify-content: center;
  .general {
    .informationsGeneral {
      display: flex;
      align-items: center;
      justify-content: center;
      .picture {
        margin-right: 20px;
        img {
          height: 80px;
          width: 80px;
          border-radius: 50%;
          border: 1px solid $primary;
          object-fit: cover;
        }
      }
      .infos {
        color: $white;
        h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
        .actions {
          display: flex;
          justify-content: flex-start;
          button {
            min-width: 80px !important;
            margin-right: 10px;
            margin-top: 10px;
          }
        }
      }
      display: flex;
    }
  }
}

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
        padding: 10px 10px;
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