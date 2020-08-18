<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,700&family=Noto+Sans+JP:wght@500&family=Nunito+Sans&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.container{
  
 margin: 1em;
}

.judul{
  font-family: 'Lato', sans-serif;
  font-size: 1.5em;
}
.subjudul{
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.2em;
}

.isi{
  font-family: 'Nunito Sans', sans-serif;
  margin: 0.5em;
}
</style>
