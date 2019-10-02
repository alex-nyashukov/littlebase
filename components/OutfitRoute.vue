<template>
  <v-card>
    <v-card-title>
      <v-layout row class="pl-3">
        <v-flex xs3>
          <h3>Маршрут {{ route.title }}</h3>
        </v-flex>
        <v-flex xs3>Автобус</v-flex>
        <v-flex xs3>Первая смена</v-flex>
        <v-flex xs3>Вторая смена</v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text>
      <outfit-way 
        v-for="way in route.ways" 
        :key="way._id" 
        :way="way"
        :date="date"
      ></outfit-way>
    </v-card-text>
  </v-card>
</template>

<script>
import OutfitWay from "@/components/OutfitWay";

export default {
  components: {
    OutfitWay
  },
  props: ["route", "date"],
  computed: {
  },
  methods: {
  }
};
</script>

<style>
</style>