<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card flat color="transparent">
          <v-card-title>Blog Posts</v-card-title>
          <v-divider />
        </v-card>
      </v-col>
      <template v-if="$fetchState.pending">
        <v-col v-for="i of 3" :key="i" cols="12">
          <v-card>
            <v-skeleton-loader type="article" />
          </v-card>
        </v-col>
      </template>
      <template v-else-if="$fetchState.error">
        <v-col cols="12">
          <app-error-card :error="$fetchState.error" @reload="$fetch" />
        </v-col>
      </template>
      <template v-else>
        <v-col v-for="(post, i) of posts" :key="i" cols="12">
          <v-card hover :to="post.path" nuxt>
            <v-card-title>
              <div>{{ post.title }}</div>
              <v-spacer />
              <v-chip small label class="pl-2 pr-1">
                <v-icon left v-text="mdiClockOutline" />
                {{ new Date(post.createdAt).toLocaleDateString() }}
              </v-chip>
            </v-card-title>
            <template v-if="post.tags">
              <v-divider />
              <div class="pa-1">
                <v-chip
                  v-for="(tag, j) of post.tags"
                  :key="j"
                  small
                  label
                  class="mr-1"
                >
                  <v-icon left v-text="mdiLabel" />
                  {{ tag }}
                </v-chip>
              </div>
            </template>
            <v-divider />
            <v-card-text>{{ post.description }}</v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiClockOutline, mdiLabel } from '@mdi/js'
import { IBlogPost } from '~/common/types'

export default Vue.extend({
  name: 'Blog',
  data: () => ({
    posts: [] as IBlogPost[],
    mdiClockOutline,
    mdiLabel,
  }),
  async fetch() {
    const posts: any = await this.$content('/blog').fetch()
    this.posts = posts
  },
  head() {
    return {
      title: 'Index',
    }
  },
})
</script>
