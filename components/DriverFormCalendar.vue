<template>
  <v-sheet :elevation="1">
    <v-calendar :now="today" :value="today" :weekdays="[1, 2, 3, 4, 5, 6, 0]" locale="ru">
      <template v-slot:day-label="{ day, date }">
        <v-menu offset-y hidden>
          <template v-slot:activator="{ on }">
            <v-layout column class="px-2" v-on="on">
              <v-layout
                justify-start
                :class="date == today? 'primary--text font-weight-bold' : 'grey--text'"
              >{{ day }}</v-layout>
              <v-layout justify-end>P</v-layout>
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
  props: ["graphic"],
  data: () => ({
    today: moment().format("YYYY-MM-DD")
  })
};
</script>

<style>
</style>