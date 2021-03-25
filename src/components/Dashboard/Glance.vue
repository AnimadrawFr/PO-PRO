<template>
  <div id="glance">
      <div class="customers">
          <i class="fas fa-user-friends"></i>
          0 Clientes
      </div>
      <div class="prestations">
          <i class="fas fa-paint-brush"></i>
          0 Types de prestations
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#glance {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>