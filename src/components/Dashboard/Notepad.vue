<template>
  <div id="notepad">
    <textarea name="" id="" class="mb-10"></textarea>
    <button class="btn btn-primary">enregistrer</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#notepad {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  textarea {
    width: 100%;
    min-height: 120px;
    background-color: $background;
    border-color: $lightGrey
  }
}
</style>