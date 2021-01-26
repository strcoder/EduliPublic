import axios from 'axios';
import { ThemeProps } from '../../models/Context/actions';

export const setTheme = async ({ id, role, theme, dispatch }: ThemeProps) => {
  if (id) {
    await axios({
      url: '/theme',
      method: 'post',
      data: {
        id,
        role,
        theme,
      },
    }).then(({ data }) => {
      document.cookie = `theme=${data.theme}`;
      dispatch({ type: 'SET_THEME', theme });
    }).catch((error) => {
      dispatch({ type: 'SET_ERROR', error });
    });
  }
  try {
    document.cookie = `theme=${theme}`;
    dispatch({ type: 'SET_THEME', theme });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', error });
  }
};

export const updateTheme = async ({ id, role, theme, dispatch }: ThemeProps) => {
  if (id) {
    await axios({
      url: '/theme',
      method: 'post',
      data: {
        id,
        role,
        theme,
      },
    }).then(({ data }) => {
      document.cookie = `theme=${data.theme}`;
      dispatch({ type: 'SET_THEME', theme });
    }).catch((error) => {
      dispatch({ type: 'SET_ERROR', error });
    });
  }
  try {
    document.cookie = `theme=${theme}`;
    dispatch({ type: 'SET_THEME', theme });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', error });
  }
};
