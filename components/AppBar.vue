<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="nav = !nav" />
    <v-btn icon tile x-large @click="$router.push('/')">
      <v-avatar tile size="48">
        <img src="/icon.png" alt="site logo" />
      </v-avatar>
    </v-btn>
    <div class="px-2 text-h5">SwarmP</div>
    <v-spacer />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { sync } from 'vuex-pathify'

export default Vue.extend({
  name: 'AppBar',
  computed: {
    nav: sync('showNavDrawer'),
  },
})
</script>
