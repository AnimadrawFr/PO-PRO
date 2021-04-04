<template>
  <div
    class="card"
    @dragstart="$emit('dragstart', $event)"
    @dragend="$emit('dragend', $event)"
  >
    <div class="card-header" v-show="headerShowed">
      <h3><i class="icon" :class="icon"></i>{{ title }}</h3>
      <p v-show="refreshed">Mis à jour le : 04/04/2021</p>
    </div>
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
    drag: Function,
    refreshed: Boolean,
    headerShowed: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

.card {
  background-color: $black;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: auto;
  height: 100%;
  margin: 30px 15px;
  &::-webkit-scrollbar {
    width: 10px !important;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: $darkGrey;
  }
  &::-webkit-scrollbar-thumb {
    background: $primary;
    border: 3px solid $darkGrey;
    border-radius: 10px;
  }
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $white;
    padding: 25px;
    cursor: grab;
    //border-bottom: 1px solid $primary;
    margin-bottom: 10px;
    .h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.8rem;
      opacity: 0.5;
    }
    .icon {
      margin-right: 10px;
    }
  }
  hr {
    background-color: $primary !important;
  }
  .card-content {
    min-height: 20px;
    padding: 10px 10px 15px 10px;
  }
}
</style>