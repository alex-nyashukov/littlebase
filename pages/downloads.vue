<template>
  <v-layout>
    <v-row>
    <v-col cols="12" sm="6" md="4">
      <download-a4></download-a4>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <download-a3></download-a3>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <download-agreement></download-agreement>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <download-report></download-report>
    </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import DownloadReport from '@/components/DownloadReport.vue'
import DownloadA4 from '@/components/DownloadA4.vue'
import DownloadA3 from '@/components/DownloadA3.vue'
import DownloadAgreement from '@/components/DownloadAgreement.vue'

export default {
  transition: "fade",
  components: {
    DownloadReport,
    DownloadA4,
    DownloadA3,
    DownloadAgreement
  }
};
</script>