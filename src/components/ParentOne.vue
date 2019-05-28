<template>
  <div>
    <button class="btn btn-primary" v-on:click="clearParentList()">Clear List</button>
    <ol><li v-for="(message, index) in messageList" :item="message" :key="index">
      {{ message }}
    </li>
  </ol>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: {
    msg: {
      type: String
    }
  },
  data: function() {
    return {
      messageList: []
    };
  },
  watch: {
    msg: function() {
      this.messageList.push(this.msg);
    }
  },
  methods: {
    clearParentList: function(arr) {
      this.messageList = [];       
    }
  }
};
</script>
