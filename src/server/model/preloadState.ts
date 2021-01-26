export type preloadState = {
  theme: string
  user?: {
    _id?: string,
    name: string,
    lastname: string,
    nickname: string,
    email: string,
    plan?: string,
    role: string,
  } | undefined,
  institute?: {},
  eduli?: {},
}
