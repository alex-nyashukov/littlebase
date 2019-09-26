<template>
<section>
  <v-text-field
    v-model="item.tabnumber"
    label="Tabnumber"
  ></v-text-field>
  <v-text-field
    v-model="item.name"
    label="Name"
  ></v-text-field>
</section>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>

</style>