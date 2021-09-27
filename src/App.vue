<template>
  <div id="app">
    <img src="../public/8-2-star-wars-logo-png-thumb.jpg" alt="star-wars">
    <div class="nav-bar">
      <nav>
        <router-link to="/people" class="link">People</router-link>
        <router-link to="/planet" class="link">Planet</router-link>
        <router-link to="/starship" class="link">Starship</router-link>
      </nav>
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
body{
  background-color: bisque;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.home{
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: start;
  align-content: center;
  margin-left: 40px;
  margin-right: 20px;
  padding: 5px;
}
.card{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: start;
  border: 2px solid black;
  margin: 5px;
  padding: 10px;
}
#Name{
  font-style: italic;
  font-weight: bold ;
}

.link {
  border: 1px solid #000;
  border-radius: 10px;
  padding: 5px;
  text-decoration: none;
  margin: 10px;
}
.nav-bar{
  margin-bottom: 20px;
}

img{
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;
}
</style>
