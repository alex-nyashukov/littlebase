<template>
<v-layout row>
  <v-flex xs12 sm6 md4 class="pa-3">
    <v-card>
      <v-card-title class="green">
        <v-icon dark>fa-file-excel</v-icon>
        <span class="ml-3 white--text">A3</span>
      </v-card-title>
      <v-card-text class="pt-2">
        <v-select :items="items" label="Месяц"></v-select>
        <v-file-input label="Шаблон"></v-file-input>
        <v-layout row justify-space-between>
          <v-flex>
          <v-btn rounded color="green" dark>Загрузить</v-btn>
          </v-flex>
          <v-flex>
          <v-btn rounded color="green" dark>Скачать </v-btn>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions class="pa-0">
        <v-btn height="52" style="font-size: 1.4rem; border-top-left-radius: 0; border-top-right-radius: 0" block color="green" dark>Скачать</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  transition: 'fade', 
  data() {
    return {
      items: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
      ]
    }
  }
}
</script>

<style scoped>
  .v-toolbar__content {
    padding: 0;
  }
</style>