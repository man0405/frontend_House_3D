"use client";
import { ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import CssBaseline from "@mui/material/CssBaseline";

import { darkTheme, lightTheme, BaseTheme } from "./theme";

export default function ThemeProviderApp({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const { resolvedTheme } = useTheme();
	const [currentTheme, setCurrentTheme] = useState(darkTheme);

	useEffect(() => {
		resolvedTheme === "light"
			? setCurrentTheme(lightTheme)
			: setCurrentTheme(darkTheme);
	}, [resolvedTheme]);
	return (
		<ThemeProvider theme={{ ...currentTheme, ...BaseTheme }}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
