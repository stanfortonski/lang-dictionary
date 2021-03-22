<template>
  <v-card elevation="2" class="px-4 py-10">
    <h1 class="mb-5">Dictionary</h1>
    <v-list>
      <v-list-item v-for="(item, i) in getDictionaryAll" :key="i" >
        <v-list-item-content>
          <v-list-item-title><mark>{{item[2]}}</mark> - <mark>{{item[3]}}</mark></v-list-item-title>
          <v-list-item-subtitle>{{item[0]}} - {{item[1]}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Dictionary',

  computed: mapGetters(['getDictionaryAll'])
}
</script>

<style scoped>
  .v-list-item__content{
    margin-bottom: 2rem;
  }

  .v-list-item__title{
    font-size: 1.5rem;
  }

  .v-list-item__subtitle{
    font-size: 1.05rem;
  }
</style>
