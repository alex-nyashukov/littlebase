<template>
  <v-layout align-center>
    <v-spacer></v-spacer>
    <v-flex xs2>Выход {{ way.title }}</v-flex>
    <way-button :items="system.buses" :size="1"></way-button>
    <way-button :items="system.drivers" v-if="!way.isTwoSmene" :size="1"></way-button>
    <way-button :items="system.drivers" v-if="!way.isTwoSmene" :size="1"></way-button>
    <way-button :items="system.drivers" v-if="way.isTwoSmene" :size="2"></way-button>
  </v-layout>
</template>

<script>
import WayButton from '@/components/OutfitRouteWayButton.vue'
export default {
  components: {
    WayButton
  },
  props: ['way', 'system']
};
</script>

<style>
</style>