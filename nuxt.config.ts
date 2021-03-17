import cp from 'child_process'
import os from 'os'
import { NuxtConfig } from '@nuxt/types'
import { DefinePlugin } from 'webpack'

function run(cmd: string) {
  return cp.execSync(cmd).toString().trim()
}

function getGitInfo() {
  return {
    branch: run('git rev-parse --abbrev-ref HEAD'),
    hash: run('git rev-parse HEAD'),
  }
}

const config: NuxtConfig = {
  target: 'static',
  head: {
    titleTemplate: '%s - SwarmP',
    title: 'SwarmP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    //
    '~/styles/markdown.scss',
  ],
  plugins: [],
  components: true,
  buildModules: [
    //
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],
  modules: [
    //
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  content: {},
  vuetify: {
    customVariables: ['~/styles/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    icons: {
      iconfont: 'mdiSvg',
      values: {},
    },
  },
  build: {
    plugins: [
      new DefinePlugin({
        BUILD: JSON.stringify({
          git: getGitInfo(),
          hostname: os.hostname(),
          ts: Date.now(),
        }),
      }),
    ],
  },
}

export default config
