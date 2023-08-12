import { withTV } from 'tailwind-variants/transformer';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const defaultConfig: Config = {
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

export const createConfig = (config: Config): Config =>
  withTV({
    ...defaultConfig,
    ...config,
  });
