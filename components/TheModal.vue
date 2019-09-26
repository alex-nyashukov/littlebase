<template>
  <v-dialog
    v-model="dialog.isOpen"
    width="900"
    :persistent="isChanged"
  >
    <v-card
      v-if="dialog.isLoading"
      color="primary"
      dark
    >
      <v-card-text>
        Please stand by
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
    <v-card
      v-else
    >
      <v-card-title v-text="dialogTitle"></v-card-title>
      <v-card-text>
        <component :is="dialog.model.form" :item="dialog.model"></component>
      </v-card-text>
      <v-card-actions>
        <v-btn v-if="this.dialog.model._id" class="ma-3" dark color="red lighten-2" @click="remove">Удалить</v-btn>
        <v-spacer></v-spacer>
        <v-btn class="ma-3" @click="onClose">Закрыть</v-btn>
        <v-btn class="ma-3" dark color="green lighten-2" @click="save">Сохранить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: {
      isLoading: false,
      isOpen: false,
      model: { form: { render() {return ''}}},
      oldModel: {}
    }
  }),
  computed: {
    isChanged() {
      return JSON.stringify(this.dialog.model) !== JSON.stringify(this.dialog.oldModel) 
    },
    dialogTitle() {
      return this.dialog.model._id ? 'Edit item' : 'New item'
    }
  },
  methods: {
    async open(model) {
      this.dialog.isLoading = true
      this.dialog.isOpen = true
      if(model._id) {
        this.dialog.model = await this.$store.dispatch(`${model.type}/read`, { id: model._id })
      } else {
        this.dialog.model = model
      }
      Object.assign(this.dialog.oldModel, this.dialog.model)
      this.dialog.isLoading = false
    },
    onClose() {
      if(this.isChanged) {
        this.dialog.isOpen = !confirm("Close?");
      } else {
        this.dialog.isOpen = false
      }
    },
    async save() {
      if(this.dialog.model._id) {
        this.dialog.model = await this.$store.dispatch(`${this.dialog.model.type}/update`, { updated_item: this.dialog.model })
      } else {
        this.dialog.model = await this.$store.dispatch(`${this.dialog.model.type}/create`, { new_item: this.dialog.model })
      }
      Object.assign(this.dialog.oldModel, this.dialog.model)
    },
    async remove() {
      await this.$store.dispatch(`${this.dialog.model.type}/remove`, { id: this.dialog.model._id })
      this.dialog.isOpen = false
    }
  }
}
</script>

<style>

</style>