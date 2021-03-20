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
            <v-card-text>
              <nuxt-content class="markdown-body" :document="post" />
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <div>
                <code>
                  Last edited: {{ new Date(post.updatedAt).toLocaleString() }}
                </code>
              </div>
              <v-spacer />
              <v-btn outlined>
                <v-icon left v-text="mdiGithub" />
                Edit on github
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiClockOutline, mdiLabel, mdiGithub, mdiOpenInNew } from '@mdi/js'
import { IBlogPost } from '~/common/types'

export default Vue.extend({
  name: 'BlogPost',
  data: () => ({
    post: {} as IBlogPost,
    mdiClockOutline,
    mdiLabel,
    mdiGithub,
    mdiOpenInNew,
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
