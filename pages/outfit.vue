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
          <template v-for="route in routes">
            <v-tab
              v-if="route.hasActiveWays(date)"
              :key="'tab-'+route._id"
              :href="'#'+route._id"
            >{{ route.title }}</v-tab>
          </template>
        </v-tabs>
      </v-card-title>
    </v-card>
    <v-layout v-if="isLoading" justify-center>
      <v-progress-circular indeterminate></v-progress-circular>
    </v-layout>
    <v-tabs-items v-else v-model="currentRoute">
      <template v-for="route in routes">
        <v-tab-item v-if="route.hasActiveWays(date)" :key="route._id" :value="route._id">
          <outfit-route :route="route" :date="date"></outfit-route>
        </v-tab-item>
      </template>
    </v-tabs-items>
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
      isLoading: false,
      currentRoute: null,
      date: moment().format("YYYY-MM-DD")
    };
  },
  watch: {
    async date(val) {
      this.isLoading = true
      await this.$store.dispatch("outfit/readByDate", { date: val })
      this.isLoading = false
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
    async update() {
      this.isLoading = true
      await this.$store.dispatch("outfit/readByDate", { date: this.date })
      this.isLoading = false
    },
    prevDay() {
      this.$refs.datePicker.prevDay();
    }
  },
  async mounted() {
    this.isLoading = true
    await Promise.all([
      this.$store.dispatch("routes/readAll"),
      this.$store.dispatch("drivers/readAll"),
      this.$store.dispatch("buses/readAll"),
      this.$store.dispatch("outfit/readByDate", { date: this.date })
    ])
    this.isLoading = false
  }
};
</script>

<style>
</style>