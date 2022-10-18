import { GlobalTheme } from "../styles/GlobalTheme";

declare module "styled-components" {
  export interface DefaultTheme extends GlobalTheme {}
}