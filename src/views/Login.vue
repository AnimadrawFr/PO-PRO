<template>
  <div id="login" class="template fullwidth">
    <div class="left">
      <h1 class="w-100 title">PO.PRO</h1>
      <p class="w-100 introduction">
        Bienvenue sur votre espace <span>PO.PRO</span>
      </p>
      <p class="w-100 footer">
        © PO.PRO 2021 - Consulter notre
        <a href="#"><span>politique de confidentialité</span></a>
      </p>
    </div>
    <div class="right">
      <SignIn />
    </div>
  </div>
</template>

<script>
import SignIn from "@/components/SignIn";

export default {
  el: "#login",
  components: {
    SignIn,
  },
};
</script>

<style lang="scss">
@import "@/style/style.scss";

#login {
  text-align: center;
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
</style>