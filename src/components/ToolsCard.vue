<template>
  <router-link :to="to" class="toolsCard" :class="color">
    <i class="icon" :class="icon"></i>
    <h3 class="mt-20">{{ title }}</h3>
  </router-link>
</template>

<script>
export default {
  props: {
    icon: String,
    color: String,
    title: String,
    to: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

.toolsCard {
  flex-direction: column;
  background-color: $black;
  border-radius: 5px;
  min-height: 200px;
  width: 180px;
  margin: 20px;
  @media(max-width: 720px) {
    width: 100%;
  }
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.red {
    color: $red;
    .icon {
      background-color: rgba($red, 0.2);
    }
  }
  &.primary {
    color: $primary;
    .icon {
      background-color: rgba($primary, 0.2);
    }
  }
  &.lightBlue {
    color: $lightBlue;
    .icon {
      background-color: rgba($lightBlue, 0.2);
    }
  }
  &.lightGreen {
    color: $lightGreen;
    .icon {
      background-color: rgba($lightGreen, 0.2);
    }
  }
  &.lightYellow {
    color: $lightYellow;
    .icon {
      background-color: rgba($lightYellow, 0.2);
    }
  }
  &.lightPink {
    color: $lightPink;
    .icon {
      background-color: rgba($lightPink, 0.2);
    }
  }
  &.darkBlue {
    color: $darkBlue;
    .icon {
      background-color: rgba($darkBlue, 0.2);
    }
  }
  &.darkPurple {
    color: $darkPurple;
    .icon {
      background-color: rgba($darkPurple, 0.2);
    }
  }
  &.orange {
    color: $orange;
    .icon {
      background-color: rgba($orange, 0.2);
    }
  }
  &.green {
    color: $green;
    .icon {
      background-color: rgba($green, 0.2);
    }
  }
  .icon {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    padding: 20px;
  }

  h3 {
    color: $white;
    text-align: center;
  }
}
</style>