<template>
  <div id="addCustomer" class="page_template">
    <TopBar />
    <SideBar />
    <div class="container">
      <h1 class="title">Ajouter une cliente</h1>
      <p class="subTitle">
        Créez une fiche cliente en remplissant ce formulaire
      </p>

      <div class="row-1 mt-10">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h3><i class="icon fas fa-eye"></i>Informations générales</h3>
            </div>
            <div class="card-content">
              <div class="input_group">
                <div class="input_blc">
                  <label for="firstName">* Prénom</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Prénom de votre cliente"
                  />
                </div>
                <div class="input_blc">
                  <label for="lastName">* Nom</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Nom de famille de votre cliente"
                  />
                </div>
                <div class="input_blc">
                  <label for="birthDay">* Date de naissance</label>
                  <input
                    id="birthDay"
                    type="text"
                    placeholder="Entrez la date de naissance de votre cliente - Ex: (01/01/1987)"
                  />
                </div>
                <div class="input_blc">
                  <label for="phone">* Téléphone</label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Numéro de téléphone de votre cliente"
                  />
                </div>
                <div class="input_blc">
                  <label for="email">* Email</label>
                  <input
                    id="email"
                    type="text"
                    placeholder="Adresse email de votre cliente"
                  />
                </div>
                <div class="input_blc">
                  <label for="job">Métier</label>
                  <input
                    id="job"
                    type="text"
                    placeholder="Si plusieurs métiers, (séparez les par une virgule)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row-1 mt-10">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h3>
                <i class="icon fas fa-eye"></i>Informations complémentaires
              </h3>
            </div>
            <div class="card-content">
              <div class="input_group">
                <div class="input_blc">
                  <label for="firstRDV">Date du premier rendez-vous :</label>
                  <input
                    id="firstRDV"
                    type="text"
                    placeholder="Entrez la date du premier rendez-vous - Ex:(01/01/2020)"
                  />
                </div>
                <div class="input_blc">
                  <label for="nails">* Nature des ongles</label>
                  <select name="" id="nails">
                    <option value="#">Choisir un type d'ongle</option>
                    <option value="Seins">Seins</option>
                    <option value="Abimés">Abimés</option>
                    <option value="Rongés">Rongés</option>
                    <option value="Autres">Autres</option>
                  </select>
                </div>
                <div class="input_blc">
                  <label for="skin">* Type de peau</label>
                  <select name="" id="skin">
                    <option value="#">Choisir un type de peau</option>
                    <option value="Sèche">Sèche</option>
                    <option value="Normale">Normale</option>
                    <option value="Grasse">Grasse</option>
                    <option value="Mixte">Mixte</option>
                  </select>
                </div>
                <div class="input_blc">
                  <label for="cuticules">Forme des cuticules</label>
                  <select name="" id="cuticules">
                    <option value="#">Choisir un type de cuticule</option>
                    <option value="Carrés">Carrés</option>
                    <option value="Ovales">Ovales</option>
                    <option value="En V">En V</option>
                    <option value="Autres">Autres</option>
                  </select>
                </div>
                <div class="input_blc">
                  <label for="sport">Sports pratiqués</label>
                  <input
                    type="text"
                    name=""
                    id="sport"
                    placeholder="Si elle pratique plusieurs sports (séparez les par une virgules)"
                  />
                </div>
                <div class="input_blc">
                  <label for="smoker">* Fumeuse</label>
                  <select name="" id="smoker">
                    <option value="#">Votre cliente fume t'elle ?</option>
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                  </select>
                </div>
                <div class="input_blc">
                  <label for="medocs">* Médicaments</label>
                  <select name="" id="medocs">
                    <option value="#">
                      Votre cliente prend t'elle des médicaments ?
                    </option>
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                  </select>
                </div>
                <div class="input_blc">
                  <label for="enceinte">* Enceinte</label>
                  <select name="" id="enceinte">
                    <option value="#">Votre cliente est elle enceinte ?</option>
                    <option value="Oui">Oui</option>
                    <option value="Non">Non</option>
                  </select>
                </div>
                <button class="btn btn-primary mt-20">Enregistrer</button>
              </div>
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

#addCustomer {
  .card-content {
    color: $white;
    .input_group {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
    }
    .input_blc {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      flex-wrap: wrap;
      width: 50%;
      @media (max-width: 720px) {
        width: 100%;
      }
      label {
        margin-left: 10px;
      }
      input[type="text"],
      select {
        border: 1px solid $primary;
        height: 30px;
        width: 80%;
        color: $white;
        @media (max-width: 720px) {
          width: 97%;
        }
        margin: 10px 0;
        padding: 0;
        padding: 5px 0 5px 10px;
      }
    }
  }
}
</style>