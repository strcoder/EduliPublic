import { Dispatch } from 'react';
import { User } from './users';

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
  user?: User,
  dispatch: Dispatch<Actions>,
}
