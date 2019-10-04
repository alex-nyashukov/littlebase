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
        <v-btn text @click="$store.commit('outfit/clear_items')" class="mr-3">Очистить</v-btn>
        <v-btn dark color="grey lighten-1" @click="auto" :loading="isSaving" class="mr-3">Авто</v-btn>
        <v-switch v-model="isFiltering" inset label="Фильтр" class="pr-3"></v-switch>
        <v-btn dark color="green lighten-1" @click="save" :loading="isSaving">Сохранить</v-btn>
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
          <outfit-route :route="route" :date="date" :isFiltering="isFiltering"></outfit-route>
        </v-tab-item>
      </template>
    </v-tabs-items>
  </v-layout>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";

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
      isFiltering: false,
      isSaving: false,
      isLoading: false,
      currentRoute: null,
      date: moment().format("YYYY-MM-DD")
    };
  },
  watch: {
    async date(val) {
      this.isLoading = true;
      await this.$store.dispatch("outfit/readByDate", { date: val });
      this.isLoading = false;
    }
  },
  computed: {
    ...mapGetters({
      buses: "buses/list",
      items: "outfit/items",
      drivers: "drivers/list",
      routes: "routes/list",
      ways: "ways/list",
      statistic: "outfit/statistic"
    }),
    isWeekend() {
      return [0, 6].includes(moment(this.date).day());
    }
  },
  methods: {
    auto() {
      let drivers = { firstSmene: [], secondSmene: [], allDay: [] };
      this.drivers.forEach(driver => {
        switch (driver.statusesByDate({ date: this.date, count: 1 })[0]) {
          case "Рабочий":
            drivers.allDay.push(driver);
            break;
          case "Первая см.":
            drivers.firstSmene.push(driver);
            break;
          case "Вторая см.":
            drivers.secondSmene.push(driver);
            break;
        }
      });
      this.$store.commit("outfit/clear_items");
      this.ways.forEach(way => {
        if (!way.isActive(this.date)) {
          return;
        }
        let buses = Array.from(this.buses).filter(bus =>
          way.capacities.includes(bus.capacity)
        );
        let statuses = undefined;
        if (way.isTwoSmene) {
          statuses = ["allDay"];
        } else {
          statuses = ["firstSmene", "secondSmene"];
        }
        statuses.forEach(status => {
          let pair = drivers[status]
            .filter(
              driver =>
                this.statistic[driver._id] &&
                this.statistic[driver._id][way._id]
            )
            .map(driver => ({
              id: driver._id,
              count: this.statistic[driver._id][way._id].count
            }))
            .reduce((p, v) => (p.count < v.count ? v : p), {
              id: null,
              count: 0
            });

          drivers[status].splice(
            drivers[status].findIndex(driver => driver._id == pair.id),
            1
          );
          this.$store.commit("outfit/set_field_value", {
            wayId: way._id,
            field: status,
            value: pair.id
          });
        });

        let pair = buses
          .filter(
            bus =>
              this.statistic[bus._id] && this.statistic[bus._id][way._id]
          )
          .map(bus => ({
            id: bus._id,
            count: this.statistic[bus._id][way._id].count
          }))
          .reduce((p, v) => (p.count < v.count ? v : p), {
            id: null,
            count: 0
          });

        buses.splice(
          buses.findIndex(bus => bus._id == pair.id),
          1
        );
        this.$store.commit("outfit/set_field_value", {
          wayId: way._id,
          field: 'bus',
          value: pair.id
        });
      });
    },
    async save() {
      this.isSaving = true;
      await this.$store.dispatch("outfit/save");
      await this.$store.dispatch("outfit/readByDate", { date: this.date });
      this.isSaving = false;
    },
    nextDay() {
      this.$refs.datePicker.nextDay();
    },
    async update() {
      this.isLoading = true;
      await Promise.all([
        this.$store.dispatch("ways/readAll"),
        this.$store.dispatch("routes/readAll"),
        this.$store.dispatch("drivers/readAll"),
        this.$store.dispatch("buses/readAll"),
        this.$store.dispatch("outfit/readByDate", { date: this.date })
      ]);
      this.isLoading = false;
    },
    prevDay() {
      this.$refs.datePicker.prevDay();
    }
  },
  async mounted() {
    this.isLoading = true;
    await Promise.all([
      this.$store.dispatch("ways/readAll"),
      this.$store.dispatch("routes/readAll"),
      this.$store.dispatch("drivers/readAll"),
      this.$store.dispatch("buses/readAll"),
      this.$store.dispatch("outfit/readByDate", { date: this.date })
    ]);
    this.isLoading = false;
  }
};
</script>

<style>
</style>