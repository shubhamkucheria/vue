<template>
  <header class="header">
    <h4>My First App </h4>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/HelloCountry">HelloCountry</router-link>|
      <router-link to="/HelloTemp">HelloTemp</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 5px;
  }
  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
  #header-middle {
    width: 33%;
    float: left;
    margin-left: auto;
    margin-right: auto;
    background-color:red;
}

#header-right {
    float: right;
    width: 33%;
    text-align: center;
    background-color: green;
}
</style>