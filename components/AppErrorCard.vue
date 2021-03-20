<template>
  <v-card class="text-center" v-bind="cardAttrs">
    <v-icon size="96px">{{ mdiAlertCircleOutline }}</v-icon>
    <v-card-text>
      <span class="text-h4">An error occurred</span>
      <br />
      <code>{{ error.message }}</code>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn color="primary" outlined block @click="$emit('reload')">
        Reload
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiAlertCircleOutline } from '@mdi/js'
export default Vue.extend({
  name: 'AppErrorCard',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mdiAlertCircleOutline,
    }
  },
  computed: {
    cardAttrs() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { error, ...others } = this.$attrs
      return others
    },
  },
})
</script>
