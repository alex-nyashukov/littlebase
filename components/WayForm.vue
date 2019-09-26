<template>
  <v-form ref="form">
    <v-layout wrap justify-space-between>
      <v-flex xs12 md6>
        <v-text-field v-model="item.title" label="Title"></v-text-field>
        <v-select v-model="item.route" :items="routes" label="Route"></v-select>
      </v-flex>

      <v-flex xs12 md5>
        <v-switch v-model="item.isTwoSmene" label="Two Smene"></v-switch>
        <v-switch v-model="item.isWeekend" label="Weekend"></v-switch>
        <v-switch v-model="item.isWeekday" label="Weekday"></v-switch>
        <v-switch v-model="item.isSummer" label="Summer"></v-switch>
        <v-switch v-model="item.isWinter" label="Winter"></v-switch>
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