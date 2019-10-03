<template>
  <app-download
    title="A3"
    @download="get_file"
    :loading="isLoading"
  >
    <v-select v-model="month" :items="items" label="Месяц"></v-select>
    <v-file-input label="Шаблон"></v-file-input>
    <v-layout>
      <v-row>
        <v-col cols="6">
          <v-btn rounded color="green" dark>Загрузить</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn rounded color="green" dark>Скачать</v-btn>
        </v-col>
      </v-row>
    </v-layout>
  </app-download>
</template>

<script>
import moment from 'moment'
import FileSaver from "file-saver";

import AppDownload from "@/components/Download.vue";
import MenuDatePicker from "@/components/MenuDatePicker.vue";
import A3Excel from '@/models/excel/a3_excel'

export default {
  components: {
    AppDownload,
    MenuDatePicker
  },
  data() {
    return {
      isLoading: false,
      renderer: A3Excel,
      month: "01",
      items: [
        { text: "Январь", value: "01" },
        { text: "Февраль", value: "02" },
        { text: "Март", value: "03" },
        { text: "Апрель", value: "04" },
        { text: "Май", value: "05" },
        { text: "Июнь", value: "06" },
        { text: "Июль", value: "07" },
        { text: "Август", value: "08" },
        { text: "Сентябрь", value: "09" },
        { text: "Октябрь", value: "10" },
        { text: "Ноябрь", value: "11" },
        { text: "Декабрь", value: "12" }
      ]
    };
  },
  computed: {
    buses() {
      return this.$store.getters['buses/list']
    },
    template() {
      return this.$store.getters['templates/template']('a3.xlsx')
    }
  },
  methods: {
    async get_file() {
      this.isLoading = true;

      await Promise.all([
        this.$store.dispatch('buses/readAll'),
        this.$store.dispatch('templates/download', { filename: 'a3.xlsx' })
      ])
      const buf = await this.renderer.render({ 
        buses: this.buses,
        template: this.template,
        month: this.month
      });
      FileSaver(new Blob([buf]), "a3.xlsx");

      this.isLoading = false;
    }
  }
};
</script>

<style>
</style>