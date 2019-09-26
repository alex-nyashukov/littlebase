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
      loading-text="Loading..."
      :headers="table.headers"
      :items="table.items"
      :search="table.search"
      :mobile-breakpoint="0"
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
  components: {
    AppModal
  },
  data: () => ({
    table: {
      isLoading: true,
      search: '',
      headers: [
        { text: 'Busnumber', value: 'busnumber' },
        { text: 'Mark' },
        { text: 'Color' }
      ],
      items: [
      ]
    }
  }),
  methods: {
    onNewItem() {
      this.$refs.modal.open(new Model())
    },
    onRowClick(item) {
      this.$refs.modal.open(item)
    }
  },
  mounted() {
    this.$store.dispatch('buses/readAll').then((res) => {
      this.table.items = res
      this.table.isLoading = false
    })
  }
}
</script>

<style>

</style>