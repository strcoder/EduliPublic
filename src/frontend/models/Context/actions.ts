interface Actions {
  dispatch: Function,
}

export interface ThemeProps extends Actions {
  id?: string,
  role?: string
  theme: string,
}
