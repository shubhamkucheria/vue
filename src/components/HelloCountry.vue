<template>
  <div class="hello">
  <div class="grid-container">
    <div class="item1"  v-on:click="getCountryList();">
      HelloCountry - Show Countries
    </div>
    <div v-if="countryData.length" class="item2">
      <div class="ex1">
        <div  v-for="post in countryData">
        <button class="btn btn-primary" v-on:click="getDetail(post);">{{post.name}}</button>
      </div>
      </div>
      
    </div>
  <div v-if="Object.keys(selectedCountry).length" class="item3">
    <img v-bind:src="selectedCountry.flag"/>
  </div>  
  <div v-if="Object.keys(selectedCountry).length" class="item4">
    <ol>
      <li>Capital - {{selectedCountry.capital}}</li>
      <br>
      <li>Currencies
        <br>
        <small v-for="spel in selectedCountry.currencies">
          {{spel.code +' - '+ spel.name +' - '+ spel.symbol}}
        <br>
        </small>
      </li>
      <br>
      <li>Languages
      <br>
        <small v-for="lang in selectedCountry.languages">
          {{'Name - '+ lang.name +' : '+ 'Native Name - '+ lang.nativeName}} <br>
        <br>
        </small>
      </li>
    </ol> 
  </div>
  <div v-if="Object.keys(selectedCountry).length" class="item5">
    <h4>{{selectedCountry.name}}</h4>
    <small v-for="spel in selectedCountry.altSpellings"><br>{{spel}}</small>
  </div>
</div>
    
  </div>        
</template>

<script>
import axios from 'axios';
class Post {
  constructor(title) {
    this.title = title;
  }
}
export default {
  data () {
    return {
      countryData: [],
      selectedCountry: {}
  }},
  methods: {
    getCountryList: function () {
      axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.countryData = res.data)
      .catch(err => console.log(err));    
    },
    getDetail: function (country) {
      this.selectedCountry = country;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
div.ex1 {
  height: 400px;
  width: 300px;
  overflow-y: scroll;
}
img {
        height: 200px;
      }
.item1 { grid-area: header;cursor: pointer; }
.item2 { grid-area: menu; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }
.item5 { grid-area: footer; }

.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
  grid-gap: 5px;
  background-color: grey;
  padding: 5px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 10px 0;
  font-size: 20px;
}
</style>