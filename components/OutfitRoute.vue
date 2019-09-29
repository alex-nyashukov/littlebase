<template>
  <v-card class="mb-3">
    <v-card-title>
      <v-layout row class="pl-3">
        <v-flex xs3><h3>Маршрут {{ route.title }}</h3></v-flex>
        <v-flex xs3>Автобус</v-flex>
        <v-flex xs3>Первая смена</v-flex>
        <v-flex xs3>Вторая смена</v-flex>
      </v-layout>
      
    </v-card-title>
    <v-card-text>
      <outfit-route-way :system="system" v-for="way in route.ways" :key="way._id" :way="way"></outfit-route-way>
    </v-card-text>
  </v-card>
</template>

<script>
import OutfitRouteWay from '@/components/OutfitRouteWay'

export default {
  components: {
    OutfitRouteWay
  },
  props: ['route', 'system']
}
</script>

<style>

</style>