<template>
  <v-app>
    <v-app-bar app color="deep-purple accent-4">
      <v-app-bar-nav-icon @click="toggleDialog"></v-app-bar-nav-icon>
      <v-toolbar-title>Lang-Dictionary</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-dialog v-model="dialog" width="500" hide-overlay scrollable>
          <v-card light class="px-5 py-4">
            <v-card-title>
              <span class="headline pb-2">Menu</span>
            </v-card-title>
            <nav class="nav-buttons">
              <router-link to="/">
                <v-btn elevation="2" color="primary" large @click="toggleDialog">Start</v-btn>
              </router-link>
              <router-link to="/dictionary">
                <v-btn elevation="2" color="primary" large @click="toggleDialog">Dictionary</v-btn>
              </router-link>
              <router-link to="/random-word">
                <v-btn elevation="2" color="primary" large @click="toggleDialog">Random Word</v-btn>
              </router-link>
              <v-btn elevation="2" color="secondary" large @click="toggleDialog">Close</v-btn>
            </nav>
          </v-card>
        </v-dialog>

        <router-view />
      </v-container>
    </v-main>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        <strong>stanfortonski/lang-dictionary</strong> &copy; {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data(){
    return {
      dialog: false,
    }
  },

  methods: {
    toggleDialog(){
      this.dialog = !this.dialog;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav-buttons .v-btn{
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

mark{
  display: inline-block;
  padding: .1rem .45rem;
  border-radius: 1rem;
}
</style>
