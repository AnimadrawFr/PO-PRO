<template>
  <div id="sidebar" :class="`slide-${isActivated}`">
    <div class="openClose" @click="toggleSideBar()">
      <b :class="`arrow-${isActivated}-rotate`">
        <i class="fas fa-chevron-left"></i>
      </b>
    </div>
    <h1 class="mt-20 mb-20">PO.PRO</h1>
    <hr />
    <div class="user-profil d-flex justify-content align-center flex-column">
      <img
        class="avatar mt-10 mb-10"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
        alt=""
      />
      <p class="mb-20">
        Connecté en tant que : <br /><br />
        <span>Animanail's</span>
      </p>
    </div>
    <hr />
    <div class="mt-10">
      <ul class="menu">
        <li :class="$route.name == 'dashboard' ? 'active' : ''"><router-link to="/"><i class="icon fas fa-tachometer-alt"></i>Tableau de bord</router-link></li>
        <li :class="$route.name == 'tools' ? 'active' : ''"><router-link to="tools"><i class="icon fas fa-tools"></i>Les outils</router-link></li>
        <li :class="$route.name == 'customers' ? 'active' : ''"><router-link to="customers"><i class="icon fas fa-users"></i>Mes clientes</router-link></li>
      </ul>
    </div>

    <div class="sidebar-footer w-100">
      <hr />
      <ul class="menu">
        <li><a href="#">Aide</a></li>
        <li><a href="#">Politique de confidentialité</a></li>
        <li class="active"><a href="#">Deconnexion</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isActivated: localStorage.getItem('sidebar') ? JSON.parse(localStorage.getItem('sidebar')) : true,
    };
  },
  methods: {
    toggleSideBar() {
      this.isActivated = !this.isActivated;
      localStorage.setItem('sidebar', this.isActivated)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

#sidebar {
  position: sticky;
  z-index: 10000;
  margin-right: 10px;
  @media(max-width: 850px) {
    position: fixed;
    width: 70%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
  top: 0;
  width: 30%;
  min-height: 100vh;
  background-color: $black;
  .openClose {
    height: 30px;
    width: 18px;
    position: absolute;
    right: -18px;
    top: 100px;
    @media (max-width: 720px) {
      top: 8px;
      width: 30px;
      right: -30px;
    }
    background-color: $black;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: $white;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    cursor: pointer;
  }
  hr {
    border-color: $primary;
  }
  h1 {
    color: $white;
    text-align: center;
  }
  .user-profil {
    text-align: center;
    p {
      color: $white;
      span {
        color: $primary;
        font-size: 20px;
      }
    }
  }

  .menu {
    li {
      width: 100%;
      .icon {
        margin-right: 20px;
      }
      a {
        color: $white !important;
        width: 100%;
        display: flex;
        align-items: center;
        height: 50px;
        text-align: left;
        margin-left: 20px;
        font-size: 0.8rem;
      }
      &.active {
        background-color: $primary !important;
      }
      &:hover {
        background-color: $darkGrey;
      }
    }
  }

  .sidebar-footer {
    position: absolute;
    bottom: 0;
  }
}

.slide-false {
  margin-left: -29.5%;
  @media(max-width: 850px) {
    margin-left: -70%;
  }
  transition: all 150ms ease-in 0s;
}
.slide-true {
  transform: translateX(0);
  transition: all 150ms ease-in 0s;
}
.arrow-false-rotate {
  transform: rotate(-180deg);
  transition: all 150ms ease-in 0s;
}
.arrow-true-rotate {
  transform: rotate(0);
  transition: all 150ms ease-in 0s;
}

</style>