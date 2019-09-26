<template>
<v-form ref="form">
    <v-layout wrap justify-space-between>
      <v-flex xs12 md6>
        <v-text-field v-model="item.tabnumber" label="Tabnumber"></v-text-field>
        <v-text-field v-model="item.name" label="Name"></v-text-field>
        <v-select v-model="item.bus" :items="buses" label="Busnumber"></v-select>
        <driver-form-calendar :graphic="item.graphic"></driver-form-calendar>
      </v-flex>

      <v-flex xs12 md5>
        <v-text-field v-model="item.phone" label="Phone"></v-text-field>
        <v-select
          v-model="item.ways"
          :items="ways"
          multiple
          label="Ways"
        ></v-select>
        <driver-form-graphic :graphic="item.graphic"></driver-form-graphic>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import DriverFormCalendar from "@/components/DriverFormCalendar.vue"
import DriverFormGraphic from "@/components/DriverFormGraphic.vue"

export default {
  components: {
    DriverFormCalendar,
    DriverFormGraphic
  },
  props: ['item'],
  computed: {
    buses() {
      return this.$store.getters['buses/list'].map((value) => ({ text: value.busnumber, value: value._id }))
    },
    ways() {
      return this.$store.getters['ways/list'].map((value) => ({ text: `${value.route.title}/${value.title}`, value: value._id }))
    }
  },
  mounted() {
    this.$store.dispatch('buses/readAll')
    this.$store.dispatch('ways/readAll')
  }
}
</script>

<style>

</style>