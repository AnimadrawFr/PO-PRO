<template>
  <div id="glance" class="w-100">
    <div class="customers">
      <i class="icon fas fa-user-friends customers"></i>
      <div class="content">
        <span>0</span>
        <p>Clientes</p>
      </div>
    </div>

    <div class="prestations">
      <i class="icon fas fa-paint-brush prestations"></i>
      <div class="content">
        <span>0</span>
        <p>Prestations</p>
      </div>
    </div>

    <div class="products">
      <i class="icon fas fa-cube products"></i>
      <div class="content">
        <span>0</span>
        <p>Produits</p>
      </div>
    </div>

    <div class="balance">
      <i class="icon fas fa-euro-sign balance"></i>
      <div class="content">
        <span>0</span>
        <p>Revenus</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#glance {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.8rem;
  color: $white;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    @media(max-width: 720px) {
        width: 50%;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      span {
        font-size: 1.5rem;
      }
    }
    .icon {
      border-radius: 50%;
      height: 20px;
      width: 20px;
      padding: 10px;
      margin-right: 10px;
      &.customers {
        color: $primary;
        background-color: rgba($primary, 0.2);
      }
      &.prestations {
        color: $lightBlue;
        background-color: rgba($lightBlue, 0.2);
      }
      &.products {
        color: $red;
        background-color: rgba($red, 0.2);
      }
      &.balance {
        color: $lightGreen;
        background-color: rgba($lightGreen, 0.2);
      }
    }
  }
}
</style>