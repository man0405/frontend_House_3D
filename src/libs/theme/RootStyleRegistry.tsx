"use client";

import { ThemeProvider as PreferredThemeProvider } from "next-themes";
import React from "react";
import ThemeProviderApp from "./ThemeProvider";
import AppRouterCacheProvider from "@mui/material-nextjs/v13-appRouter/appRouterV13";

export default function RootStyleRegistry({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<PreferredThemeProvider>
			<AppRouterCacheProvider>
				<ThemeProviderApp>{children}</ThemeProviderApp>
			</AppRouterCacheProvider>
		</PreferredThemeProvider>
	);
}
