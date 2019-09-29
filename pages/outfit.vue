<template>
<v-layout column>
  <outfit-route :system="system" v-for="route in routes" :key="route._id" :route="route"></outfit-route>
</v-layout>
</template>

<script>
import OutfitRoute from '@/components/OutfitRoute.vue'

export default {
  transition: 'fade',
  components: {
    OutfitRoute
  },
  data() {
    return {
      
    }
  },
  computed: {
    system() {
      return {
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
  mounted() {
    this.$store.dispatch('routes/readAll')
    this.$store.dispatch('buses/readAll')
    this.$store.dispatch('drivers/readAll')
  }
}
</script>

<style>

</style>