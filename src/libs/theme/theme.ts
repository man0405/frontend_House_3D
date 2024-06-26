"use client";
import { Roboto } from "next/font/google";
import { createTheme, PaletteOptions } from "@mui/material/styles";

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

export const BaseTheme = createTheme({
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
});

type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "dark";

export const lightTheme = createTheme({
	palette: {
		primary: { main: "#9147FF" },
		secondary: { main: "#2a48f3" },
		mode: "light",
	},
});

export const darkTheme = createTheme({
	palette: {
		primary: { main: "#9147FF" },
		secondary: { main: "#2a48f3" },
		mode: "dark",
	},
});
