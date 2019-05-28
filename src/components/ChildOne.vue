<template>
  <div class="hello">
    <input placeholder="write something" v-model="someMessage"/>
    <button class="btn btn-primary" v-on:click="submit(someMessage)">Send to parent Component</button>
  </div>
</template>

<script>
export default {
  name: "UsrMsg",
  data() {
    return {
      someMessage: ""
    };
  },
  methods: {
    submit: function(someMessage) {
      if(someMessage) {
        this.$emit("inputData", someMessage);
        this.someMessage = "";
      }      
    }
  }
};
</script>
