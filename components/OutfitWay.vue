<template>
  <v-layout v-if="localWay.isActive(date)" align-center>
    <v-spacer></v-spacer>
    <v-flex xs2>Выход {{ way.title }}</v-flex>
    <outfit-bus-select
      :key="localWay._id+'1'"
      :size="1"
      :way="localWay"
      field="bus"
    ></outfit-bus-select>
    <outfit-driver-select
      :key="localWay._id+'2'"
      v-if="!localWay.isTwoSmene"
      :size="1"
      :way="localWay"
      field="firstSmene"
    ></outfit-driver-select>
    <outfit-driver-select
      :key="localWay._id+'3'"
      v-if="!localWay.isTwoSmene"
      :size="1"
      :way="localWay"
      field="secondSmene"
    ></outfit-driver-select>
    <outfit-driver-select
      :key="localWay._id+'4'"
      v-if="localWay.isTwoSmene"
      :size="2"
      :way="localWay"
      field="allDay"
    ></outfit-driver-select>
  </v-layout>
</template>

<script>
import OutfitDriverSelect from "@/components/OutfitDriverSelect.vue";
import OutfitBusSelect from "@/components/OutfitBusSelect.vue";
import Way from '@/models/way'

export default {
  components: {
    OutfitDriverSelect,
    OutfitBusSelect,
  },
  props: ["way", "date"],
  data() {
    return {

    };
  },
  watch: {
    
  },
  computed: {
    localWay() {
      return new Way(this.way)
    }
  },
  methods: {
  }
};
</script>

<style>
</style>