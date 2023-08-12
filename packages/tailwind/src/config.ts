import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export const defaultConfig: Config = {
  content: [],
  theme: {
    ...defaultTheme,
    screens: {
      mobile: '320px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
};
