<template>
  <router-link :to="to" class="toolsCard">
    <img :src="image" alt="" class="mb-20" />
    <h3>{{ title }}</h3>
  </router-link>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    to: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

.toolsCard {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: $white;
  border-radius: 5px;
  min-height: 200px;
  padding: 10px;
  h3 {
    text-transform: uppercase;
    color: $primary;
    text-align: center;
    font-size: 0.9rem;
  }
}
</style>