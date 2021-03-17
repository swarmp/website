<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <template v-if="$fetchState.pending">
          <v-card>
            <v-skeleton-loader type="article" />
          </v-card>
        </template>
        <template v-else-if="$fetchState.error">
          <app-error-card :error="$fetchState.error" @reload="$fetch" />
        </template>
        <template v-else>
          <v-card>
            <v-card-title>
              {{ post.title }}
            </v-card-title>
            <v-divider />
            <div class="pa-1">
              <v-chip small label>
                <v-icon left v-text="mdiClockOutline" />
                {{ new Date(post.createdAt).toLocaleString() }}
              </v-chip>
              <v-chip small label>
                <v-icon left v-text="mdiPencil" />
                {{ new Date(post.updatedAt).toLocaleString() }}
              </v-chip>
            </div>
            <v-divider />
            <v-card-text>
              <nuxt-content class="markdown-body" :document="post" />
            </v-card-text>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { IBlogPost } from '~/common/types'

export default Vue.extend({
  name: 'BlogPost',
  data: () => ({
    post: {} as IBlogPost,
  }),
  async fetch() {
    const post: any = await this.$content(
      `/blog/${this.$route.params.path}`
    ).fetch()
    this.post = post
  },
  head() {
    return {
      title: this.post.title + ' - Blog',
    }
  },
})
</script>
