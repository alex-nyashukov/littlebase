<template>
<v-layout column>
  <v-card class="mb-3">
    <v-card-title>
      <v-flex xs12 sm7 md4>
        <v-layout align-center justify-end>
          <v-menu v-model="menu" :close-on-content-click="false" max-width="290">
            <template v-slot:activator="{ on }">
              <v-text-field
                flat
                style="box-shadow: none"
                class="desable-shadow mr-4"
                solo
                hide-details
                :value="formattedDate"
                label="Date"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @change="menu = false"></v-date-picker>
          </v-menu>
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
    </v-card-title>
  </v-card>
  <outfit-route :system="system" v-for="route in routes" :key="route._id" :route="route"></outfit-route>
</v-layout>
</template>

<script>
import moment from 'moment'
import OutfitRoute from '@/components/OutfitRoute.vue'

export default {
  transition: 'fade',
  components: {
    OutfitRoute
  },
  data() {
    return {
      date: moment().format("YYYY-MM-DD"),
      menu: false,
    }
  },
  computed: {
    formattedDate() {
      return this.date ? moment(this.date).format("DD/MM/YYYY") : "";
    },
    system() {
      return {
        isWeekend: [0, 6].includes(moment(this.date).day()),
        drivers: this.drivers.map((value) => ({ text: value.tabnumber, value: value._id, ...value })),
        buses: this.buses.map((value) => ({ text: value.busnumber, value: value._id, ...value }))
      }
    },
    routes() {
      return this.$store.getters['routes/list']
    },
    buses() {
      return this.$store.getters['buses/list']
    },
    drivers() {
      return this.$store.getters['drivers/list']
    }
  },
  methods: {
    nextDay() {
      this.date = moment(this.date)
        .add(1, "d")
        .format("YYYY-MM-DD");
    },
    update() {
      this.$store.dispatch("buses/readAll");
    },
    prevDay() {
      this.date = moment(this.date)
        .subtract(1, "d")
        .format("YYYY-MM-DD");
    }
  },
  mounted() {
    this.$store.dispatch('routes/readAll')
    this.$store.dispatch('buses/readAll')
    this.$store.dispatch('drivers/readAll')
  }
}
</script>

<style>

</style>