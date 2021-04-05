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

</style>