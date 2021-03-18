import { IContentDocument } from '@nuxt/content/types/content'

export interface IMemberInfo extends IContentDocument {
  name: string
  realname: string
  email: string
  motto: string
  role: string
  lang: string
  tz: string
}

export interface IBlogPost extends IContentDocument {
  title: string
  description: string
  tags?: string[]
}
