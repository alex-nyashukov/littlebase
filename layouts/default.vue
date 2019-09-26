<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list>
        <v-list-item v-for="item in menu" :key="item.title" :to="item.link">
          <v-list-item-content>
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt></nuxt>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { title: 'Drivers', link: '/drivers' },
      { title: 'Buses', link: '/buses' },
      { title: 'Downloads', link: '/downloads' },
    ],
    drawer: false
  })
}
</script>

<style>

</style>