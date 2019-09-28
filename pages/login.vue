<template>
  <v-layout fill-height justify-center align-center>
    <v-form @submit="login">
      <v-card width="400">
        <v-card-title></v-card-title>
        <v-card-text>
          <v-text-field v-model="username" label="Логин"></v-text-field>
          <v-text-field v-model="password" label="Пароль"></v-text-field>
        </v-card-text>
        <v-card-actions class="pa-0">
          <v-btn type="submit" height="56" @click="login" block>Войти</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-layout>
</template>

<script>
export default {
  transition: 'fade',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$auth
        .loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })
    }
  }
};
</script>

<style>
</style>