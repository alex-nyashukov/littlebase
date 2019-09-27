<template>
  <v-form ref="form">
    <v-layout wrap justify-space-between>
      <v-flex xs12 md6>
        <v-text-field v-model="item.title" label="Название"></v-text-field>
        <v-select v-model="item.route" :items="routes" label="Маршрут"></v-select>
      </v-flex>

      <v-flex xs12 md5>
        <v-switch v-model="item.isTwoSmene" label="Две смены"></v-switch>
        <v-switch v-model="item.isWeekend" label="Выходные"></v-switch>
        <v-switch v-model="item.isWeekday" label="Будни"></v-switch>
        <v-switch v-model="item.isSummer" label="Лето"></v-switch>
        <v-switch v-model="item.isWinter" label="Зима"></v-switch>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    routes() {
      return this.$store.getters['routes/list'].map((value) => ({ text: value.title, value: value._id }))
    }
  },
  mounted() {
    this.$store.dispatch('routes/readAll')
  }
}
</script>

<style>

</style>