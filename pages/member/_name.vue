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
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="getAvatarUrl(member.email)" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ member.name }}
                  <span class="text--secondary">
                    {{ member.realname }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ member.motto }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>
                  {{ member.role }}
                </v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <v-divider />
            <v-card-text>
              <nuxt-content class="markdown-body" :document="member" />
            </v-card-text>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import gravatar from 'gravatar'
import { IMemberInfo } from '~/common/types'
import { proxyGravatar } from '~/common/statically'

export default Vue.extend({
  name: 'Member',
  data: () => ({
    member: {} as IMemberInfo,
  }),
  async fetch() {
    const member: any = await this.$content(
      `/member/${this.$route.params.name}`
    ).fetch()
    this.member = member
  },
  head() {
    return {
      title: this.member.name + ' - Member',
    }
  },
  methods: {
    getAvatarUrl(email: string) {
      return proxyGravatar(gravatar.url(email))
    },
  },
})
</script>
