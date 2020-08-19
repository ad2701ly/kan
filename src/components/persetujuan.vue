<template>
  <v-ons-dialog cancelable :visible.sync="$store.state.persetujuan">

    <div class="subjudul">
          <v-ons-icon icon="fa-pencil"></v-ons-icon><span> Hak dan Kewajiban Mitra</span>
    </div>

    <p>Bacalah dengan seksama sebelum melanjutkan</p>
    <div class="perhatian">
        <p class="subjudul">Kewajiban Mitra</p>
        <ol>
            <li>Mitra Menawarkan Produk Ke Konsumen</li>
            <li>Mitra Boleh Menawarkan Secara Offline ataupun Online</li>
            <li>Mitra dilarang menjual harga lebih tinggi dari yang ditentukan</li>
        </ol>
    </div> 
    <div class="perhatian">
        <p class="subjudul">Hak Mitra</p>
        <ol>
            <li>Mitra mendapatkan Fee dari hasil penjualan</li>
            <li>Mitra Boleh menjual harga lebih tinggi jika Mitra sudah Pre Order terlebih dahulu</li>
        </ol>
    </div>
    
    <v-ons-button @click="PENDAFTARAN_DIALOG(true),PERSETUJUAN_DIALOG(false)"> 
        <v-ons-icon icon="fa-check"></v-ons-icon> 
        Saya Paham dan Lanjut Untuk Mendaftar
    </v-ons-button>
  </v-ons-dialog>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['PENDAFTARAN_DIALOG', 'PERSETUJUAN_DIALOG'])
  }
}
</script>

<style scoped>
p{
    text-align: center;
    font-weight: bolder;
}
li{
    text-align: left;
    margin-right: 0.5em;
}
.perhatian{
    border: 2px dashed black;
    margin: 0.5em;
}
</style>