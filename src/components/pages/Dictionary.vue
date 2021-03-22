<template>
  <v-card elevation="2" class="px-4 py-10">
    <h1 class="mb-5">Dictionary</h1>
    <v-list>
      <v-list-item v-for="(item, i) in database" :key="i" >
        <v-list-item-content>
          <v-list-item-title><mark>{{item[2]}}</mark> - <mark>{{item[3]}}</mark></v-list-item-title>
          <v-list-item-subtitle>{{item[0]}} - {{item[1]}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import databaseJson from '../../../database.json';

export default {
  name: 'Dictionary',
  data(){
    return {
      database: [],
      random: null
    }
  },

  created(){
    for (const item of databaseJson){
      const format = [];
      for (const prop in item){
        format.push(item[prop]);
      }
      this.database.push(format);
    }
  }
}
</script>

<style scoped>
  mark{
    display: inline-block;
    padding: .1rem .45rem;
    border-radius: 1rem;
  }

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
