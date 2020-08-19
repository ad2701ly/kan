<template>
  <v-ons-dialog :visible.sync="$store.state.pendaftaran" cancelable>
      <div class="subjudul">
          <v-ons-icon icon="fa-pencil"></v-ons-icon> <span> Form Pendaftaran</span>
      </div>
      <v-ons-list>
          <v-ons-list-item>            
                  <v-ons-input :float="true" placeholder="Nama" v-model="data.nama"></v-ons-input>
          </v-ons-list-item>
          <v-ons-list-item>
                  <v-ons-input :float="true" placeholder="No HP/WA" v-model="data.hp"></v-ons-input>
          </v-ons-list-item>
          <v-ons-list-item>
                  <v-ons-input :float="true" placeholder="Email" v-model="data.email"></v-ons-input>
          </v-ons-list-item>
      </v-ons-list>
  </v-ons-dialog>
</template>

<script>
export default {
  data () {
    return {
      data: {}
    }
  }
}
</script>

<style>

</style>