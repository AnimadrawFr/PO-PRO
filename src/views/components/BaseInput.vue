<template>
  <div class="texts">
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <span @click="$emit('remove-input')">
      <i class="icon fas fa-times"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";

input {
  border: 1px solid $primary;
  border-radius: 4px;
  background-color: #283046;
  color: #7367f0;
  margin: 0;
  padding: 0;
  padding-left: 7px;
}

.icon {
  color: $white;

  &:hover {
    cursor: pointer;
  }
}
</style>
