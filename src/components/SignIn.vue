<template>
  <div id="login-form" class="d-flex justify-center align-center flex-column">
    <h1 class="mb-40">PO.PRO</h1>
    <p class="mb-20">Se connecter</p>
    <form
      action=""
      class="sign-form d-flex justify-center align-center flex-column"
    >
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
        <label for="remember-me">Se souvenir de moi</label>
      </div>
      <button class="btn btn-primary mb-40" type="submit">Se connecter</button>
      <p class="mb-20 register-me">
        Pas encore de compte ?
        <span><a href="#">Inscriver-vous maintenant</a></span>
      </p>
      <a href="#"> Mot de passe oublié ?</a>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#login-form {
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
    }
  }
}
</style>