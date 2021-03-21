---
title: Hello World
description: Blog test
tags:
  - test
---

# Markdown: Syntax test
## h2
### h3
#### h4
##### h5
###### h6

```ts
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
```
