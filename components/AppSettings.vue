<template>
  <v-navigation-drawer
    v-model="settings"
    right
    disable-route-watcher
    fixed
    hide-overlay
    temporary
  >
    <v-toolbar flat color="transparent">
      <div class="text-button">Settings</div>
      <v-spacer />
      <v-btn icon @click="settings = !settings">
        <v-icon>{{ mdiClose }}</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider />
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiClose } from '@mdi/js'
import { sync } from 'vuex-pathify'

export default Vue.extend({
  name: 'AppSettings',
  data() {
    return {
      mdiClose,
    }
  },
  computed: {
    settings: sync('showSettingsDrawer'),
  },
})
</script>
