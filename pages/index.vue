<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text class="text-center">
            <img src="/icon.png" class="logo" />
          </v-card-text>
          <v-divider />
          <v-card-text class="text-center text-h4"> SwarmP </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  head() {
    return {
      title: 'Index',
    }
  },
})
</script>

<style lang="scss" scoped>
$size: 60vmin;

.logo {
  max-width: $size;
  max-height: $size;
  margin: max(-5vmin, -64px);
}
</style>
