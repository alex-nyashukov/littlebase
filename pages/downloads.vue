<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>A4</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-toolbar elevation="0">
          <v-toolbar-items class="align-center">
            <v-btn text>Download</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>A3</v-expansion-panel-header>
      <v-expansion-panel-content>
        
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>Agreements</v-expansion-panel-header>
      <v-expansion-panel-content>
        
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  transition: 'fade', 

}
</script>

<style scoped>
  .v-toolbar__content {
    padding: 0;
  }
</style>