<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Members</v-card-title>
          <v-divider />
          <v-card-text>
            <v-row>
              <v-col
                v-for="(member, i) of members"
                :key="i"
                cols="6"
                sm="4"
                md="3"
                xl="2"
              >
                <v-card outlined :to="member.path" hover nuxt>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-img :src="getAvatarUrl(member.email)" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ member.name }}
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-list-item-action-text>
                        {{ member.role }}
                      </v-list-item-action-text>
                    </v-list-item-action>
                  </v-list-item>
                  <v-divider />
                  <v-card-text>
                    {{ member.motto }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import gravatar from 'gravatar'
import { IMemberInfo } from '~/common/types'

export default Vue.extend({
  name: 'Members',
  data: () => ({
    members: [] as IMemberInfo[],
  }),
  async fetch() {
    const members: any = await this.$content('/member').fetch()
    this.members = members
  },
  head() {
    return {
      title: 'Members',
    }
  },
  methods: {
    getAvatarUrl(email: string) {
      return gravatar.url(email)
    },
  },
})
</script>
