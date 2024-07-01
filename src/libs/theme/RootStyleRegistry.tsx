import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider as PreferredThemeProvider } from "next-themes";
import ThemeProvider from "./ThemeProvider";

export default function RootStyleRegistry({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<PreferredThemeProvider>
			<AntdRegistry>
				<ThemeProvider>{children}</ThemeProvider>
			</AntdRegistry>
		</PreferredThemeProvider>
	);
}
