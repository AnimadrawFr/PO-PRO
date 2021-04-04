<template>
  <div id="login-form" class="d-flex justify-center align-center flex-column">
    <h1 class="mb-40">PO.PRO</h1>
    <p class="mb-20">S'inscrire</p>
    <form
      action=""
      class="sign-form d-flex justify-center align-center flex-column"
    >
      <input
        type="text"
        name="firstname"
        id="firstname"
        class="w-100"
        placeholder="Votre prénom"
      />
      <input
        type="text"
        name="lastname"
        id="lastname"
        class="w-100"
        placeholder="Votre nom"
      />
      <input
        type="email"
        name="email"
        id="email"
        class="w-100"
        placeholder="Votre email"
      />
      <input
        type="password"
        name="password"
        id="password"
        class="w-100"
        placeholder="Votre mot de passe"
      />
      <div class="w-100 mb-20">
        <input type="checkbox" name="remember-me" id="remember-me" />
        <label for="remember-me"
          >Accepter les <span><a href="">termes et conditions</a></span> de
          PO.PRO</label
        >
      </div>
      <button class="btn btn-primary mb-40" type="submit">
        Créer mon compte
      </button>
      <p class="mb-20 register-me">
        Vous avez déjà un compte ?
        <span><a href="#">Connectez-vous ici</a></span>
      </p>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#login-form {
  @media (max-width: 460px) {
    text-align: center !important;
  }
  h1 {
    color: $primary;
    font-size: 30px;
    text-decoration: underline;
  }
  p {
    font-size: 25px;
  }
  .sign-form {
    #remember-me {
      margin: 10px;
    }
    .register-me {
      font-size: inherit;
      @media (max-width: 460px) {
        text-align: center !important;
      }
    }
    input {
      &[type="email"],
      &[type="password"],
      &[type="text"] {
        @media (max-width: 460px) {
          width: 80% !important;
        }
      }
    }
  }
}
</style>