<template>
  <div class="hello">
  <h1>HelloCountry</h1>
       
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My 1st Vue.js App',
      input_val: '',
      counter: 0,
      userCount: 0,
      users: [
        {firstname: 'jim', lastname: 'smith'},
        {firstname: 'jack', lastname: 'jill'},
        {firstname: 'john', lastname: 'pinto'}
      ]
    }
  },
  methods: {
    plus: function () {
      this.counter++;
    },
    randomNameGenerator: function () {
      return _.range(5).map(i => _.sample("abcdefghijklmnopqrstuvwxyz")).join('');
    }
    ,
    addUser: function () {
      this.userCount++; 
      this.users = [...this.users, {firstname: `${this.randomNameGenerator()}`, lastname: `${this.randomNameGenerator()}`}];
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