import { DefaultTheme } from "styled-components";

const fontSize = {
  title: "50px",
  example: "36px",
};

const colors = {
  gray: "gray",
};

const theme: DefaultTheme = { fontSize, colors } as const;

export default theme;
