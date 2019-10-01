<template>
  <v-layout v-if="isShow" align-center>
    <v-spacer></v-spacer>
    <v-flex xs2>Выход {{ way.title }}</v-flex>
    <outfit-bus-select
      :key="way._id+'1'"
      :size="1"
      :way="way"
      field="bus"
    ></outfit-bus-select>
    <outfit-driver-select
      :key="way._id+'2'"
      v-if="!way.isTwoSmene"
      :size="1"
      :way="way"
      field="firstSmene"
    ></outfit-driver-select>
    <outfit-driver-select
      :key="way._id+'3'"
      v-if="!way.isTwoSmene"
      :size="1"
      :way="way"
      field="secondSmene"
    ></outfit-driver-select>
    <outfit-driver-select
      :key="way._id+'4'"
      v-if="way.isTwoSmene"
      :size="2"
      :way="way"
      field="allDay"
    ></outfit-driver-select>
  </v-layout>
</template>

<script>
import OutfitDriverSelect from "@/components/OutfitDriverSelect.vue";
import OutfitBusSelect from "@/components/OutfitBusSelect.vue";

export default {
  components: {
    OutfitDriverSelect,
    OutfitBusSelect,
  },
  props: ["way", "isWeekend"],
  data() {
    return {

    };
  },
  watch: {
    
  },
  computed: {
    isShow() {
      let isShow =
        (this.way.isWeekend && this.isWeekend) ||
        (this.way.isWeekday && !this.isWeekend);
      return isShow;
    }
  },
  methods: {
  }
};
</script>

<style>
</style>