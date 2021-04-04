<template>
  <div id="activity">
    <div class="list-bloc mb-20" v-for="item in activity" :key="item.id">
      <h4 class="title mb-10">{{ item.title }}</h4>
      <div class="content">
        <p>{{ item.content }}</p>
        <a :href="item.url">Voir la fiche</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activity: [
        {
          id: 0,
          title: "Dernière cliente enregistrée :",
          content: "Nom - Prénom",
          url: "#",
        },
        {
          id: 1,
          title: "Dernière cliente reçue :",
          content: "Nom - Prénom",
          url: "#",
        },
        {
          id: 2,
          title: "Dernière prestation enregistrée:",
          content: "Titre prestation",
          url: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

h4 {
  font-size: 0.8rem;
}

#activity {
  .list-bloc {
    .title {
      text-decoration: underline;
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-size: 0.8rem;
        color: $primary;
      }
      a {
        font-size: 0.8rem;
      }
    }
  }
}
</style>