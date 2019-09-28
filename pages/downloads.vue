<template>
<v-layout row>
  <v-flex xs12 sm6 md4 class="pa-3" v-for="(download, index) in downloads" :key="index">
    <v-card>
      <v-card-title class="green">
        <v-icon dark>fa-file-excel</v-icon>
        <span class="ml-3 white--text">{{ download.title }}</span>
      </v-card-title>
      <v-card-text class="pt-2">
        <v-select v-model="download.month" :items="items" label="Месяц"></v-select>
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
        <v-btn 
          height="52" 
          style="font-size: 1.4rem; border-top-left-radius: 0; border-top-right-radius: 0" 
          block 
          color="green" 
          dark
          @click="get_file(download)"
        >
          Скачать
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import FileSaver from "file-saver"
import { AgreementExcel, A3Excel, A4Excel } from '@/models/excel'

export default {
  transition: 'fade', 
  data() {
    return {
      downloads: [
        { title: 'А3', month: 'Январь', renderer: A3Excel, code: 'a3', getData: async () => {
          await Promise.all([
            this.$store.dispatch('buses/readAll'),
            this.$store.dispatch('templates/download', { filename: 'a3.xlsx' })
          ])
          let buses = this.$store.getters['buses/list']
          let template = this.$store.getters['templates/template']('a3.xlsx')
          return { buses, template }
        }},
        { title: 'А4', month: 'Январь', renderer: A4Excel, code: 'a4', getData: async () => {
          await Promise.all([
            this.$store.dispatch('drivers/readAll'),
            this.$store.dispatch('templates/download', { filename: 'a4.xlsx' })
          ])
          let drivers = this.$store.getters['drivers/list']
          let template = this.$store.getters['templates/template']('a4.xlsx')
          return { drivers, template }
        } },
        { title: 'Согласие', month: 'Январь', renderer: AgreementExcel, code: 'agreement', getData: async () => {
          await Promise.all([
            this.$store.dispatch('drivers/readAll'),
            this.$store.dispatch('templates/download', { filename: 'agreement.xlsx' })
          ])
          let drivers = this.$store.getters['drivers/list']
          let template = this.$store.getters['templates/template']('agreement.xlsx')
          return { drivers, template }
        } },
      ],
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
  },
  methods: {
    async get_file(download) {
      const data = await download.getData()
      data.month = download.month
      const buf = await download.renderer.render(data)
      FileSaver(new Blob([buf]), download.code+".xlsx");
    }
  }
}
</script>