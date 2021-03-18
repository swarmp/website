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
                cols="12"
                sm="6"
                md="4"
                lg="3"
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
                      <v-list-item-subtitle>
                        {{ member.realname }}
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
                    {{ member.motto }}
                  </v-card-text>
                  <v-divider v-if="metas.some((m) => m.prop in member)" />
                  <v-list dense class="pa-0">
                    <v-list-item
                      v-for="(meta, j) of metas.filter((m) => m.prop in member)"
                      :key="j"
                    >
                      <v-list-item-icon>
                        <v-icon v-text="meta.icon" />
                      </v-list-item-icon>
                      <v-list-item-content class="text-right">
                        <v-list-item-title class="text-caption">
                          {{ member[meta.prop] }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
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
import { mdiEmail, mdiTranslate, mdiWebClock } from '@mdi/js'
import { IMemberInfo } from '~/common/types'

export default Vue.extend({
  name: 'Members',
  data: () => ({
    members: [] as IMemberInfo[],
    metas: [
      { icon: mdiEmail, prop: 'email' },
      { icon: mdiTranslate, prop: 'lang' },
      { icon: mdiWebClock, prop: 'tz' },
    ],
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
