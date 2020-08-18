<template>
  <v-ons-page modifier="back">    
   
   <div class="background"></div>
    <div class="isi">
      <p class="judul">MITRA CV. KIM</p>

      <div class="quotes">
        "Peluang Untuk Menjadi Pengusaha Tanpa Harus Keluar Rumah. Usaha Anda Ada Di Genggaman Anda"
      </div>

      <div class="banner">
        Mahasiswa / Mahasiswi Maupun Wirausaha
      </div>
      <div class="banner">
        Saatnya anda hidup mandiri dengan penghasilan sendiri
      </div>

      <v-ons-button>Daftar Sekarang</v-ons-button>
    </div>
  
  </v-ons-page>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'

}
</script>

<style scoped>
.quotes{
  display: block;
  border: 3px dashed white;
  color: white;
  padding: 1em;
  font-size: 1.2em;
  font-weight: bolder;
}

.page--back__background{
 
  background-image: url("../assets/backone.jpg");
  background-size: 100% 100%;

}

.banner{
  font-size: 1.5em;
  padding: 0.5em;
  font-weight: bold;
  text-shadow: ivory 2px 2px;
  margin-top: 0.5em;
}

.button{
  margin: 1.5em;
  font-size: 1.5em;
  padding: 0.5em;
  display: box;
  animation: animate 1.5s infinite;
}

.button::after{
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 100%;
  z-index: -1;
  top: 50%;
  left: 50%;
  border: 6px solid white;
  transform: translate(-50%, -50%);
  position: absolute;
  animation: ring 1.5s infinite;
}

@keyframes ring {
  0%{
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100%{
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}

@keyframes animate{
  0%{
    border: 2px solid white;
    box-shadow: 0 0 5px 10px transparent;
  }
  50%{
        border: 2px solid black;
    box-shadow: 0 0 5px 10px skyblue;
  }
  100%{
        border: 2px solid white;
    box-shadow: 0 0 5px 10px transparent;
  }
}


</style>
