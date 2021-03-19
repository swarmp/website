const STATICALLY_BASE = 'https://statically.zzisu.dev'

export function proxyGravatar(url: string) {
  const i = url.indexOf('/avatar/')
  return STATICALLY_BASE + '/gr' + url.substr(i + 1)
}
