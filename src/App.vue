<template>
  <v-ons-page id="app" modifier="template">
    <NavigasiAtas />
    <div class="content">
      <router-view/>
    </div>
    <v-ons-modal :visible="this.$store.state.loading">
       <v-ons-icon icon="fa-spinner" spin></v-ons-icon>
      <p>Loading</p>
    </v-ons-modal>

    <Persetujuan />
    <Pendaftaran/>
  </v-ons-page>
</template>

<script>
import NavigasiAtas from './components/NavigasiAtas'
import Persetujuan from './components/persetujuan'
import Pendaftaran from './components/pendaftaran'
export default {
  components: {
    NavigasiAtas,
    Persetujuan,
    Pendaftaran
  },
  data () {
    return {
      modal: false
    }
  }
}
</script>


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

.judul{
  font-family: 'Lato', sans-serif;
  font-size: 1.5em;


}
.subjudul{
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.2em;
  display: block;
  margin: auto;
  text-align: center;
}

.isi{
  font-family: 'Nunito Sans', sans-serif;
  margin: 0.5em;
}
.page{
  padding-top: 1em;
}
</style>
