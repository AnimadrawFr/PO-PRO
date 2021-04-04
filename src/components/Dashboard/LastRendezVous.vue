<template>
  <div id="rendez-vous">
    <img src="../../assets/rendez-vous.svg" alt="" />
    <div class="rdv-infos">
      <div class="date">
        <span>LUN</span>
        <p>24/04</p>
        <p>10h00</p>
      </div>
      <div class="customer">
        <span>Rendez-vous avec :</span>
        <p>Nom / prénom</p>
      </div>
    </div>
    <hr>
    <div class="rdv-infos">
      <div class="date">
        <span>MAR</span>
        <p>25/04</p>
        <p>13h00</p>
      </div>
      <div class="customer">
        <span>Rendez-vous avec :</span>
        <p>Nom / prénom</p>
      </div>
    </div>
    <hr>
    <div class="rdv-infos">
      <div class="date">
        <span>MER</span>
        <p>26/04</p>
        <p>13h00</p>
      </div>
      <div class="customer">
        <span>Rendez-vous avec :</span>
        <p>Nom / prénom</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#rendez-vous {
    text-align: center;
  img {
    width: 95%;
    object-fit: cover;
    padding-bottom: 2px;
  }
  .rdv-infos {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0;
    .date {
      color: $white;
      padding-right: 40px;
      margin-right: 20px;
      border-right: 1px solid $white;
      text-align: center;
      span {
        font-size: 0.9rem;
        font-weight: bold;
        color: $primary;
      }
      p {
        font-size: 0.8rem;
        margin-top: 5px;
      }
    }
    .customer {
      color: $white;
      span {
        font-size: 1rem;
      }
      p {
        font-size: 1rem;
        margin-top: 5px;
      }
    }
  }
}
</style>