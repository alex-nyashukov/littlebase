<template>
  <v-flex :xs3="size === 1" :xs6="size === 2">
      <v-overflow-btn
        editable
        style="align-items: center"
        full-width
        clearable
        hide-details
        :items="items"
      >
        <template v-slot:selection="{ item }">
          <v-layout fill-height align-center class="mt-2">{{ item.text }}</v-layout>
        </template>
        <template v-slot:item="{ item }">
          <v-tooltip left>
            <template v-slot:activator="{ on }">
              <v-layout
                v-on="on"
                justify-space-between
                fill-height
                style="border-right: 3px solid red"
              >
                <span>{{ item.text }}</span>
                <span class="pr-2">{{ 123 }}</span>
              </v-layout>
            </template>
            <span>{{ tooltip(item) }}</span>
          </v-tooltip>
        </template>
      </v-overflow-btn>
    </v-flex>
</template>

<script>
export default {
  props: ['size', 'items'],
  methods: {
    tooltip(item) {
      switch(item.type) {
        case 'drivers':
          return item.name
        case 'buses':
          return `${item.mark} ${item.color}`
      }
    } 
  }
}
</script>

<style>

</style>