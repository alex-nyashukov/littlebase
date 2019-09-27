<template>
  <v-card class="mt-5">
    <v-card-title>
      Buses
      <v-spacer></v-spacer>
      <v-text-field
        v-model="table.search"
        label="Search"
      ></v-text-field>
      <v-btn
        fab
        dark
        absolute
        top
        right
        color="green lighten-2"
        @click="onNewItem"
      >
        <v-icon>fa-plus</v-icon>
      </v-btn>
    </v-card-title>
    <v-data-table
      :loading="table.isLoading"
      :headers="table.headers"
      :search="table.search"
      :items="items"
      :mobile-breakpoint="0" 
      loading-text="Loading..."
      @click:row="onRowClick"
    >
    </v-data-table>
    <app-modal
      ref="modal"
    ></app-modal>
  </v-card>
</template>

<script>
import Model from '@/models/bus'
import AppModal from '@/components/TheModal.vue'

export default {
  transition: 'fade', 
  components: {
    AppModal
  },
  data() {
    return {
      table: {
        isLoading: true,
        search: '',
        headers: [
          { text: 'Busnumber', value: 'busnumber' },
          { text: 'Mark', value: 'mark' },
          { text: 'Color', value: 'color' },
          { text: 'Capacity', value: 'capacity' }
        ]
      }
    }
  },
  computed: {
    items() {
      return this.$store.getters['buses/list']
    }
  },
  methods: {
    onNewItem() {
      this.$refs.modal.open(new Model())
    },
    onRowClick(item) {
      this.$refs.modal.open(item)
    }
  },
  mounted() {
    this.$store.dispatch('buses/readAll').then(() => {
      this.table.isLoading = false
    })
  }
}
</script>

<style>

</style>