import 'styled-components';
import defaultTheme from './default';

declare module 'styled-components' {
  type ThemeType = typeof defaultTheme;

  export interface DefaultTheme extends ThemeType {}
}
