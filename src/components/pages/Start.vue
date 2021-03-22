<template>
<div>
  <v-card elevation="2" class="py-15 px-4 mb-4">
    <h1 class="mb-2">Language Dictionary</h1>
    <p>Made by Stan Fortoński</p>
    <a href="https://github.com/stanfortonski/lang-dictionary" target="_blank">
      <v-btn color="primary" elevation="1" x-large>
        Learn more
      </v-btn>
    </a>
  </v-card>

  <v-card elevation="2" class="py-8 px-4">
    <router-link to="/dictionary">
      <v-btn color="primary" elevation="1" x-large>go to dictionary</v-btn>
    </router-link>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
