<template>
  <div class="card">
    <div class="card-header">
      <h3><i class="icon" :class="icon"></i>{{ title }}</h3>
      <i class="fas fa-chevron-down"></i>
    </div>
    <hr />
    <div class="card-content" v-if="opened">
      <component :is="content"></component>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    opened: Boolean,
    content: [Object, String, Function],
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

.card {
  background-color: $white;
  margin-bottom: 10px;
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $primary;
    padding: 10px;
    cursor: grab;
    .icon {
      margin-right: 10px;
    }
  }
  hr {
    background-color: $primary !important;
  }
  .card-content {
    height: 20px;
  }
}
</style>