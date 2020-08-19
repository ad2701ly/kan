<template>

      <v-ons-toolbar modifier="transparent">
      <div class="left">
        <v-ons-toolbar-button >
          <v-ons-icon icon="fa-sign-in-alt"></v-ons-icon>
          <span>Login</span>
        </v-ons-toolbar-button>
      </div>
      <div class="right">
        <v-ons-toolbar-button @click="PERSETUJUAN_DIALOG(true)">
          <v-ons-icon icon="fa-file-signature"></v-ons-icon>
          <span>Register</span>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>

</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'NavigasiAtas',
  methods: {
    ...mapMutations(['PERSETUJUAN_DIALOG'])
  }
}
</script>

<style scoped>

</style>