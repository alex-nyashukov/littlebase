<template>
  <v-layout column>
    <v-card class="mb-3">
      <v-card-title class="pt-2">
        <v-flex xs12 sm7 md4>
          <v-layout align-center justify-end>
            <menu-date-picker ref="datePicker" v-model="date"></menu-date-picker>
            <v-btn @click="prevDay" color="white" elevation="1" fab small>
              <v-icon color="grey darken-1">fa-chevron-left</v-icon>
            </v-btn>
            <v-btn @click="update" class="ml-3" color="white" elevation="1" fab small>
              <v-icon color="grey darken-1">fa-redo-alt</v-icon>
            </v-btn>
            <v-btn @click="nextDay" class="ml-3" color="white" elevation="1" fab small>
              <v-icon color="grey darken-1">fa-chevron-right</v-icon>
            </v-btn>
          </v-layout>
        </v-flex>
        <v-spacer></v-spacer>
        <v-btn dark color="green lighten-1" @click="save">Сохранить</v-btn>
      </v-card-title>
      <v-card-title class="pt-2">
        <v-tabs v-model="currentRoute" centered>
          <v-tab v-for="route in routes" :key="'tab-'+route._id" :href="'#'+route._id">
            {{ route.title }}
          </v-tab>
        </v-tabs>
      </v-card-title>
    </v-card>
    <template>
      <v-tabs-items v-model="currentRoute">
          <v-tab-item v-for="route in routes" :key="route._id" :value="route._id">
            <outfit-route :route="route" :isWeekend="isWeekend"></outfit-route>
          </v-tab-item>
        </v-tabs-items>
    </template>
  </v-layout>
</template>

<script>
import moment from "moment";

import OutfitRoute from "@/components/OutfitRoute.vue";
import MenuDatePicker from "@/components/MenuDatePicker";

export default {
  transition: "fade",
  components: {
    OutfitRoute,
    MenuDatePicker
  },
  data() {
    return {
      currentRoute: null,
      date: moment().format("YYYY-MM-DD")
    };
  },
  watch: {
    date(val) {
      this.$store.dispatch("outfit/readByDate", { date: val });
    }
  },
  computed: {
    routes() {
      return this.$store.getters["routes/list"];
    },
    isWeekend() {
      return [0, 6].includes(moment(this.date).day());
    }
  },
  methods: {
    save() {
      this.$store.dispatch("outfit/save");
    },
    nextDay() {
      this.$refs.datePicker.nextDay();
    },
    update() {
      this.$store.dispatch("buses/readAll");
    },
    prevDay() {
      this.$refs.datePicker.prevDay();
    }
  },
  async mounted() {
    this.$store.dispatch("routes/readAll");
    this.$store.dispatch("drivers/readAll");
    this.$store.dispatch("buses/readAll");
    this.$store.dispatch("outfit/readByDate", { date: this.date });
  }
};
</script>

<style>
</style>