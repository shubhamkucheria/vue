<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <div>
      <input type="text" v-model="input_val">
    </div>
    <div v-if="input_val">
      Once upon a time there was a  <span v-text="input_val"></span>
    </div>
    
    <div>
      <button class="btn btn-primary" v-on:click="plus()">I can eat {{counter}} apple!</button>
      <button class="btn btn-primary" v-on:click="addUser()">add User</button>
    </div>
    <div>
      <ul>
        <li v-for="user in users">
          {{user.firstname}} {{user.lastname}}
        </li>
      </ul>
    </div>
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