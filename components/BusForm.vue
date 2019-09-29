<template>
<v-form ref="form">
    <v-layout wrap justify-space-between>
      <v-flex xs12 md6>
        <v-text-field v-model="item.busnumber" label="Бортовой номер"></v-text-field>
        <v-select v-model="item.color" :items="['Синий','Зеленый','Голубой']" label="Цвет"></v-select>
        <v-select 
          v-model="item.mark" 
          :items="['ГОЛАЗ 525110','ЛиАЗ 4292', 'ЛиАЗ 6213','ЛиАЗ 5292', 'Mercedes Benz 2232']" 
          label="Марка"
        ></v-select>
        <v-select v-model="item.capacity" :items="['МВ','СВ','БВ','ОБВ']" label="Вместимость"></v-select>
      </v-flex>

      <v-flex xs12 md5>
        <v-select
          v-model="item.way"
          :items="ways"
          label="Выход"
        ></v-select>
        <v-select v-model="item.status" :items="['', 'Ремонт','СВАРЗ']" label="Статус"></v-select>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
export default {
  props: ['item'],
  computed: {
    ways() {
      return this.$store.getters['ways/list'].map((value) => ({ text: `${value.route.title}/${value.title} ${ value.isWeekend ? 'В' : '' }`, value: value._id }))
    }
  },
  mounted() {
    console.log(this.item)
    this.$store.dispatch('ways/readAll')
  }
}
</script>

<style>

</style>