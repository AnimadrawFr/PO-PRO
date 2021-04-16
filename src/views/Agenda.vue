<template>
  <div id="agenda" class="page_template">
    <div class="container">
      <div class="actions">
        <month-picker-input
          lang="fr"
          :default-month="new Date().getMonth()"
          :default-year="new Date().getFullYear()"
          :max-date="new Date()"
          input-pre-filled
        />
        <button class="btn btn-primary">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-header"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { MonthPickerInput } from "vue-month-picker";

export default {
  components: {
    SideBar,
    TopBar,
    MonthPickerInput,
  },
  data() {
    return {
      newEvent: [
        {
          id: null,
          title: null,
          start: null,
          time: null,
          color: null,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/style/style.scss";

#agenda {
  height: 100vh;
  width: 100vw;
  padding: 10px;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid red;
  .container {
    margin: 0;
  }
  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      height: 80px !important;
      width: 80px !important;
      min-width: inherit !important;
    }
  }
}

.month-picker-input-container[data-v-201d773d] {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: auto !important;
  input {
    width: 100% !important;
    display: flex;
    align-items: center !important;
    justify-content: center !important;
    text-align: center;
    font-size: 1.5rem;
  }
}
</style>