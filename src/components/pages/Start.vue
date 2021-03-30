<template>
  <div>
    <v-card elevation="2" class="py-15 px-4 mb-4">
      <h1 class="mb-4">Language Dictionary</h1>
      <div>
        <router-link to="/dictionary">
          <v-btn color="primary" elevation="1" class="mx-2 my-2">dictionary</v-btn>
        </router-link>
        <router-link to="/random-word">
          <v-btn color="primary" elevation="1" class="mx-2 my-2">Random word</v-btn>
        </router-link>
          <router-link to="/guess-word">
          <v-btn color="primary" elevation="1" class="mx-2 my-2">Guess word</v-btn>
        </router-link>
      </div>
    </v-card>

    <v-card elevation="2" class="py-8 px-4">
      <p>Made by Stan Fortoński</p>
      <a href="https://github.com/stanfortonski/lang-dictionary" target="_blank">
        <v-btn color="primary" elevation="1">
          Read about it
        </v-btn>
      </a>
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
