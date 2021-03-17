import { IContentDocument } from '@nuxt/content/types/content'

export interface IMemberInfo extends IContentDocument {
  name: string
  email: string
  motto: string
  role: string
}

export interface IBlogPost extends IContentDocument {
  title: string
  description: string
  tags?: string[]
}
