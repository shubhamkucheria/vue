<template>
  <div class="hello">
  <h1>HelloCountry</h1>
  <button class="btn btn-primary" v-on:click="getCountryList();">Show Countries</button>

  <div v-if="countryData.length">
      <ul>
        <li v-for="country in countryData">
          {{country.name}}
        </li>
      </ul>
    </div>
        
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
    countryData: []
    }
  },
  methods: {
    getCountryList: function () {
      axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.countryData = res.data)
      .catch(err => console.log(err));    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
div {
  padding: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>