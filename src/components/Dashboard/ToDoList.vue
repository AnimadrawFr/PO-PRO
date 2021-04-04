<template>
  <div id="todolist">
    <div class="addTask">
      <input type="text" />
      <button class="btn btn-primary">Ajouter</button>
    </div>
    <div class="taskList">
      <table>
        <thead>
          <tr>
            <td>Tache :</td>
            <td>Actions :</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nom de la tache</td>
            <td>
              <i class="icon fas fa-check check"></i>
              <i class="icon fas fa-trash trash"></i>
            </td>
          </tr>
          <tr>
            <td>Nom de la tache</td>
            <td>
              <i class="icon fas fa-check check"></i>
              <i class="icon fas fa-trash trash"></i>
            </td>
          </tr>
          <tr>
            <td>Nom de la tache</td>
            <td>
              <i class="icon fas fa-check check"></i>
              <i class="icon fas fa-trash trash"></i>
            </td>
          </tr>
          <tr>
            <td>Nom de la tache</td>
            <td>
              <i class="icon fas fa-check check"></i>
              <i class="icon fas fa-trash trash"></i>
            </td>
          </tr>
          <tr>
            <td>Nom de la tache</td>
            <td>
              <i class="icon fas fa-check check"></i>
              <i class="icon fas fa-trash trash"></i>
            </td>
          </tr>
          <tr>
            <td>Nom de la tache</td>
            <td>
              <i class="icon fas fa-check check"></i>
              <i class="icon fas fa-trash trash"></i>
            </td>
          </tr>
          <tr>
            <td>Nom de la tache</td>
            <td>
              <i class="icon fas fa-check check"></i>
              <i class="icon fas fa-trash trash"></i>
            </td>
          </tr>
          <tr>
            <td>Nom de la tache</td>
            <td>
              <i class="icon fas fa-check check"></i>
              <i class="icon fas fa-trash trash"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#todolist {
  .addTask {
    display: flex;
    align-items: center;
    justify-content: space-around;
    input {
      background-color: $background;
      height: 20px;
      margin: 0;
      width: 100%;
      margin-right: 10px;
    }
    button {
      min-width: 50px;
    }
  }
  .taskList {
    table {
      width: 100%;
      margin-top: 30px;
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
  }
  textarea {
    width: 100%;
    min-height: 120px;
    background-color: $background;
    border-color: $primary;
  }
}
</style>