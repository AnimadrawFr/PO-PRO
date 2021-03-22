<template>
  <div id="login" class="template fullwidth">
    <div class="left">
      <h1 class="w-100 title">PO.PRO</h1>
      <p class="w-100 introduction">
        <span>Bienvenue</span> <br />
        Créez votre compte en 5 minutes, vous bénéficierez de 1 mois offert.
      </p>
      <p class="w-100 footer">
        © PO.PRO 2021 - Consulter notre
        <a href="#"><span>politique de confidentialité</span></a>
      </p>
    </div>
    <div class="right">
      <SignUp />
    </div>
  </div>
</template>

<script>
import SignUp from "@/components/SignUp";

export default {
  el: "#login",
  components: {
    SignUp,
  },
};
</script>

<style lang="scss">
@import "@/style/style.scss";

.introduction {
  span {
    font-size: 30px;
  }
  font-size: 16px !important;
  line-height: 25px;
}
</style>