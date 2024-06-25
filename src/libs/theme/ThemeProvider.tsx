"use client";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
import React from "react";
import { useAppSelector } from "../redux/hooks";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === "light"
			? {
					// palette values for light mode
					primary: amber,
					divider: amber[200],
					text: {
						primary: grey[900],
						secondary: grey[800],
					},
			  }
			: {
					// palette values for dark mode
					primary: deepOrange,
					divider: deepOrange[700],
					background: {
						default: deepOrange[900],
						paper: deepOrange[900],
					},
					text: {
						primary: "#fff",
						secondary: grey[500],
					},
			  }),
	},
});

export default function ThemeProviderApp({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const appSelection = useAppSelector((state) => state.theme.mode);

	// Update the theme only if the mode changes
	const theme = React.useMemo(
		() => createTheme(getDesignTokens(appSelection)),
		[appSelection]
	);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
