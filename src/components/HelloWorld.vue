<template>
  <div class="hello">
    <h1>{{ msgs }}</h1>
    
      <div class="childParentDiv">
        <div class="column" style="background-color:#34495E;">
          <h2>Child Component</h2>
          <ChildOne @inputData="updateMessage" />
        </div>
        <div class="column" style="background-color:#41B883;">
          <h2>Parent Component</h2>
          <ParentOne :msg="childData" />
        </div>
      </div>


     

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
import ParentOne from "./ParentOne";
import ChildOne from "./ChildOne";

export default {
  name: 'HelloWorld',
  components: {
    ParentOne,
    ChildOne
  },
  data () {
    return {
      msgs: 'Welcome to My 1st Vue.js App',
      input_val: '',
      counter: 0,
      userCount: 0,
      childData: "",
      users: [
        {firstname: 'jim', lastname: 'smith'},
        {firstname: 'jack', lastname: 'jill'},
        {firstname: 'john', lastname: 'pinto'}
      ]
    }
  },
  methods: {
    updateMessage(variable) {
      this.childData = variable;
    },
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
* {
  box-sizing: border-box;
}

/* Create two equal columns that floats next to each other */
.column {
  color: white;
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.childParentDiv:after {
  content: "";
  display: table;
  clear: both;
}
</style>