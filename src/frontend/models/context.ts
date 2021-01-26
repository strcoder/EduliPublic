import { Dispatch } from 'react';

type Actions = {
  type: string,
  theme: string
}

export type ProviderProps = {
  children: React.ReactElement,
  initialState: Object,
}

export type ContextProps = {
  theme: string,
  dispatch: Dispatch<Actions>,
}
