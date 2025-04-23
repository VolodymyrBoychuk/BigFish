// theme.js
// theme.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';
// У theme.ts або index.tsx
import '@fontsource/public-sans/400.css'; // Regular
import '@fontsource/public-sans/500.css'; // Medium
import '@fontsource/public-sans/700.css'; // Bold
import '@fontsource/public-sans/800.css'; // ExtraBold

// Optional: Configure color mode, etc.
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Public Sans', sans-serif`,
    body: `'Public Sans', sans-serif`,
  },
});

export default theme;
