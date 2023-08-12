import { defaultConfig } from '@tv-bug/tailwind';
import { withTV } from 'tailwind-variants/transformer';

const config = withTV({
  ...defaultConfig,
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}', '../../packages/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
});

export default config;
