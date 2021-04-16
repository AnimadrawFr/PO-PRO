<template>
  <div id="gallery" class="page_template">
    <TopBar />
    <div class="container mt-40">
      <div class="gallery-topbar">
        <div class="gallery-title">
          <h1>Inspiration photos</h1>
          <p class="mt-10">
            Retrouvez quelques photos pour vos inspirations (source : Unsplash)
          </p>
        </div>
        <div class="gallery-pagination">
          <button
            class="btn btn-primary prev"
            :disabled="page < 2"
            @click="updatePrevImages"
          >
            Précedent
          </button>
          <button
            class="btn btn-primary next"
            @click="updateNextImages"
            :disabled="page === 5"
          >
            Suivant
          </button>
        </div>
      </div>
      <div class="gallery">
        <figure
          class="gallery-image"
          v-for="(image, index) in imageList"
          :key="index"
        >
          <a
            :href="image.links.html + '?utm_source=PO_PRO&utm_medium=referral'"
            target="_blank"
          >
            <img :src="image.urls.regular" width="800" height="800" />
          </a>
          <figcaption>
            <a
              target="_blank"
              :href="
                image.user.links.html + '?utm_source=PO_PRO&utm_medium=referral'
              "
            >
              Auteur : {{ image.user.name }}
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

export default {
  data() {
    return {
      apiLink: "https://api.unsplash.com/search/photos",
      apiQuery: "manicure",
      page: 1,
      apiKey: "v2ZLcpL1lcsfZX_u1aTmr5gKT5aWNas-AtxBG9g1yvI",
      imageList: [],
      // ${this.apiLink}?query=${this.apiQuery}&page=${this.page}&client_id=${this.apiKey}
    };
  },
  components: {
    TopBar,
    SideBar,
  },
  methods: {
    updatePrevImages() {
      this.page--;
      this.getImages();
    },
    updateNextImages() {
      this.page++;
      this.getImages();
    },
    getImages() {
      fetch(
        `${this.apiLink}?query=${this.apiQuery}&page=${this.page}&client_id=${this.apiKey}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.imageList = data.results;
          console.log(this.imageList);
        });

    },
  },
  mounted() {
    this.getImages();
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

.gallery-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 720px) {
    flex-direction: column;
    margin-top: 40px;
  }
  .gallery-title {
    @media (max-width: 720px) {
      text-align: center;
    }
  }
  .gallery-pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 720px) {
      margin-top: 40px;
    }
    button {
      margin: 0 5px;
      &:disabled {
        background-color: $black;
      }
    }
  }
}

figcaption {
  a {
    color: $white;
  }
}

.container {
  padding: 10px;
  @media(max-width: 720px) {
    padding: 0;
  }
  h1 {
    color: $white;
  }
  p {
    color: $white;
  }
}

img {
  max-width: 100%;
  height: auto;
  transform-origin: top left;
}

// #app {
//   padding-bottom: 330%;
// }

.gallery {
  display: flex;
  flex-flow: column wrap;
  align-content: space-between;
  overflow: hidden;
  margin-top: 40px;
  height: 310vw; // Sized based on vw to expand properly

  .gallery-image {
    width: 33.3%;

    &[data-flipping] {
      opacity: 1;
      z-index: 3;
    }
  }

  /* Re-order items into rows */
  .gallery-image:nth-child(3n + 1) {
    order: 1;
  }
  .gallery-image:nth-child(3n + 2) {
    order: 2;
  }
  .gallery-image:nth-child(3n) {
    order: 3;
  }

  /* Force new columns */
  &::before,
  &::after {
    content: "";
    flex-basis: 100%;
    width: 0;
    order: 2;
  }

  //display: grid;
  //grid-template-columns: 1fr 1fr 1fr;
}

.gallery-image {
  margin: 0;
  display: block;
  position: relative;

  img {
    display: block;
    width: 100%;
  }

  figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    text-shadow: 0 0 1px #000;
    opacity: 0.8;
    padding: 1em;
    text-align: left;
    transition: opacity 0.4s linear;
    font-family: monospace;
  }

  &:hover figcaption {
    opacity: 1;
  }
}

.detail {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(25, 25, 25, 0);
  box-shadow: 0 0 30px #000;
  display: flex;
  pointer-events: none;
  transition: background 0.3s linear;

  .gallery-image {
    padding: 5vmin;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }

    figcaption {
      display: none;
    }
  }
}

[data-state="detail"] .detail {
  // opacity: 1;
  background: rgba(25, 25, 25, 0.85);
  pointer-events: auto;
  .gallery-image {
    opacity: 1;
  }
}

[data-state="gallery"] .detail {
  .gallery-image {
    opacity: 0;
    transition: none;
  }
}

/* ---------------------------------- */
body {
  background: black;
}

#app {
  pointer-events: none;

  .gallery .gallery-image {
    pointer-events: auto;
  }
}

.gallery-image {
  transition: opacity 0.5s linear;
}

#app:hover .gallery {
  .gallery-image {
    opacity: 0.6;
  }

  .gallery-image[data-flipping],
  .gallery-image:hover {
    opacity: 1;
    transition-duration: 0.3s;
  }
}
</style>