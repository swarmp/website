<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text class="text-center">
            <img src="/icon.png" class="logo" />
          </v-card-text>
          <v-divider />
          <v-card-text class="text-center">
            <div class="text-h4">SwarmP</div>
            <div class="text-h6">Unite the smart. Build for the smart.</div>
          </v-card-text>
          <v-divider />
          <v-card-text>
            <template v-if="$fetchState.pending">
              <v-card>
                <v-skeleton-loader type="article" />
              </v-card>
            </template>
            <template v-else-if="$fetchState.error">
              <app-error-card
                outlined
                :error="$fetchState.error"
                @reload="$fetch"
              />
            </template>
            <template v-else>
              <nuxt-content class="markdown-body" :document="content" />
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  data: () => ({
    content: {},
  }),
  async fetch() {
    const content: any = await this.$content('index').fetch()
    this.content = content
  },
  head() {
    return {
      title: 'Index',
    }
  },
})
</script>

<style lang="scss" scoped>
$size: 40vmin;

.logo {
  max-width: $size;
  max-height: $size;
  margin: max(-5vmin, -64px);
}
</style>
