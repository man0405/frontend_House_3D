import React from "react";
import { ThemeProvider as PreferredThemeProvider } from "next-themes";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ThemeProviderApp from "./ThemeProvider";

export default function RootStyleRegistry({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<PreferredThemeProvider>
			<AntdRegistry>
				<ThemeProviderApp>{children}</ThemeProviderApp>
			</AntdRegistry>
		</PreferredThemeProvider>
	);
}
