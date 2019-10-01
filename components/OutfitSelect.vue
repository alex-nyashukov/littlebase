<template>
  <v-select
    editable
    style="align-items: center"
    full-width
    clearable
    hide-details
    :items="items"
    :value="value"
    @change="(data) => {$emit('input', data)}"
  >
    <template v-slot:selection="{ item }">
      <slot v-bind:item="item"></slot>
    </template>
    <template v-slot:item="{ item }">
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <slot v-bind:item="item" v-on="on"></slot>
        </template>
        <v-slot name="tooltip" v-bind:item="item"></v-slot>
      </v-tooltip>
    </template>
  </v-select>
</template>

<script>
export default {
  props: ['value', 'items']
};
</script>

<style>
  .v-select__selections input {
    display: none !important;
  }
</style>