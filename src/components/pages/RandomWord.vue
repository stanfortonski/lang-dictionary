<template>
  <v-card elevation="2" class="px-4 py-10">
    <h1 class="mb-4">Random Word</h1>
    <p>Counter: <strong>{{ counter }}</strong></p>

    <v-btn @click="randomItem" elevation="2" color="primary" class="mb-6">Get random</v-btn>

    <div v-if="random" class="random">
      <mark>{{random[firstIndex]}}</mark> - <mark>{{random[lastIndex]}}</mark>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'RandomWord',

  data(){
    return {
      random: null,
      firstIndex: 2,
      lastIndex: 3,
      counter: 0
    }
  },

  mounted(){
    this.counter = 0;
  },

  computed: mapGetters(['getRandomItem']),

  methods: {
    randomItem(){
      this.$store.commit('randItem');

      const direction = Math.random() < 0.5;
      if (direction){
        this.firstIndex = 2;
        this.lastIndex = 3;
      }
      else {
        this.firstIndex = 3;
        this.lastIndex = 2;
      }

      this.random = this.getRandomItem;
      this.counter++;
    }
  }
}
</script>

<style scoped>
.random{
  font-size: 2rem;
}
</style>
