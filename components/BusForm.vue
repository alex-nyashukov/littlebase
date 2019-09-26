<template>
<v-form ref="form">
    <v-layout wrap justify-space-between>
      <v-flex xs12 md6>
        <v-text-field v-model="item.busnumber" label="Busnumber"></v-text-field>
        <v-select v-model="item.color" :items="['Синий','Зеленый','Голубой']" label="Color"></v-select>
        <v-select v-model="item.mark" :items="['Голаз','Лиаз']" label="Mark"></v-select>
        <v-select v-model="item.capacity" :items="['МВ','СВ','БВ','ОБВ']" label="Capacity"></v-select>
      </v-flex>

      <v-flex xs12 md5>
        <v-select
          v-model="item.way"
          :items="ways"
          label="Way"
        ></v-select>
        <v-select v-model="item.status" :items="['', 'Ремонт','СВАРЗ']" label="Status"></v-select>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
export default {
  props: ['item'],
  computed: {
    ways() {
      return this.$store.getters['ways/list'].map((value) => ({ text: value.title, value: value._id}))
    }
  },
  mounted() {
    this.$store.dispatch('ways/readAll')
  }
}
</script>

<style>

</style>