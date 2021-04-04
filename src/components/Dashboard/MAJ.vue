<template>
  <div id="maj">
    <div class="list-bloc mb-20" v-for="item in majs" :key="item.id">
      <h4 class="title mb-10">{{ item.title }}</h4>
      <div class="content">
        <p class="mb-10">
          {{ item.content }}
        </p>
        <a :href="item.url">Lire la suite</a>
      </div>
    </div>
    <div class="footer">
        <a href="#">Voir toutes les mises à jour</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      majs: [
        {
          id: 0,
          title: "Mise à jour du 24/03/2021",
          content: "Mise en place du drag and drop sur le dashboard",
          url: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#maj {
  .list-bloc {
    h4 {
      color: $primary;
      font-size: 0.9rem;
      text-align: center;
    }
    .content {
      font-size: 0.8rem;
      color: $white;
    }
  }
  .footer {
      text-align: center;
      font-size: 0.8rem;
  }
}
</style>