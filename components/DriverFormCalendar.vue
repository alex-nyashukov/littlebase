<template>
  <v-sheet :elevation="1">
    <v-toolbar elevation="0">
        <v-btn fab small elevation="1" @click="$refs.calendar.prev()"><v-icon>fa-chevron-left</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-btn fab small elevation="1" @click="$refs.calendar.next()"><v-icon>fa-chevron-right</v-icon></v-btn>
    </v-toolbar>
    <v-calendar 
      @change="onChange"
      ref="calendar"
      v-model="date"
      :weekdays="[1, 2, 3, 4, 5, 6, 0]" 
      locale="ru">
      <template v-slot:day-label="{ day, date }">
        <v-menu offset-y hidden>
          <template v-slot:activator="{ on }">
            <v-layout column class="px-2" v-on="on">
              <v-layout
                justify-start
                :class="date == today? 'primary--text font-weight-bold' : 'grey--text'"
              >{{ day }}</v-layout>
              <v-layout justify-end>{{ statuses[date] }}</v-layout>
            </v-layout>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in [{title: 'item 1'}, {title: 'item 2'}, {title: 'item 2'}, {title: 'item 2'}, {title: 'item 2'}, {title: 'item 2'}]"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-calendar>
  </v-sheet>
</template>

<script>
import moment from "moment";

export default {
  props: ["item"],
  data: () => ({
    today: moment().format("YYYY-MM-DD"),
    date: moment().format("YYYY-MM-DD"),
    statuses: {}
  }),
  watch: {
    item: {
      handler: function(val){
        this.statuses = this.calculate_statuses()
      },
      deep: true
    }
  },
  methods: {
    onChange() {
      this.statuses = this.calculate_statuses()
    },
    calculate_statuses() {
      let start_of_month = moment(this.date).startOf('month')
      let end_of_month = moment(this.date).endOf('month')
      let start_of_calendar = start_of_month.subtract((start_of_month.day()+6)%7, 'd')
      let end_of_calendar = end_of_month.add(6-((end_of_month.day()+6)%7), 'd')
      let difference = end_of_calendar.diff(start_of_calendar, 'd')
      return this.item.statusesByDate({date: start_of_calendar, count: difference+1, isShort: true, withDate: true})
    }
  },
  mounted() {
    this.$refs.calendar.checkChange()
  }
};
</script>

<style>
</style>