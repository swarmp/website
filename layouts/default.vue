<template>
  <v-app>
    <app-bar />
    <app-nav />
    <app-settings />
    <v-main>
      <nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
})
</script>
