<template>
  <div id="agenda" class="page_template">
    <TopBar />
    <SideBar />
    <div class="container">
      <h1 class="title">Mon agenda</h1>
      <p class="subTitle">Personnalisez et visualisez tout vos rendez-vous</p>
      <div class="row-1 mt-40">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h3><i class="icon fas fa-eye"></i>Ajouter un rendez-vous</h3>
            </div>
            <div class="card-content">
              Pour :
              <select name="" id="" class="mt-10" v-model="newEvent.customer">
                <option value="null">Choisir une cliente</option>
                <option value="George Amandine">George Amandine</option>
                <option value="Maxime Sénéchal">Maxime Sénéchal</option>
                <option value="Cécilia Sénéchal">Cécilia Sénéchal</option>
              </select>
              <div class="mt-10 d-flex align-center justify-between">
                <div>
                  Date du rendez-vous : <br />
                  <input
                    type="date"
                    name=""
                    id=""
                    class="mt-10"
                    v-model="newEvent.date"
                  />
                </div>
                <div>
                  Heure du rendez-vous : <br />
                  <input
                    type="time"
                    name=""
                    id=""
                    class="mt-10"
                    v-model="newEvent.hour"
                  />
                </div>
                <div>
                  Choisir une couleur : <br />
                  <input
                    type="color"
                    name=""
                    id=""
                    class="mt-10"
                    v-model="newEvent.color"
                  />
                </div>
              </div>
              <button class="btn btn-primary mt-20" @click="setEvent()">
                Ajouter le rendez-vous
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row-1">
        <div class="col">
          <div class="card">
            <FullCalendar :options="calendarOptions" id="agendaCalendar" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import FullCalendar, { Calendar } from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import frLocale from "@fullcalendar/core/locales/fr";

export default {
  components: {
    SideBar,
    TopBar,
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        droppable: true,
        events: [
          {
            title: "My Event",
            start: "2021-04-01T16:30",
          },
        ],
        locale: frLocale,
      },
      newEvent: {
        customer: null,
        date: null,
        hour: null,
        color: null,
        url: "/singleCustomer",
      },
    };
  },
  methods: {
    setEvent() {
      this.calendarOptions.events.push({
        title: this.newEvent.customer,
        start: `${this.newEvent.date}T${this.newEvent.hour}`,
        color: this.newEvent.color,
        url: this.newEvent.url,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/style.scss";

.card {
  padding: 20px 10px;
  color: $white;
  .card-content {
    select {
      border: 1px solid $primary;
      margin-left: 0;
    }
    input[type="date"],
    input[type="time"],
    input[type="color"] {
      background-color: $black;
      color: $white;
      border-radius: 5px;
      width: 200px;
      padding: 10px 10px;
      border: 1px solid $primary;
    }
    a {
      color: $white;
    }
  }
}
</style>