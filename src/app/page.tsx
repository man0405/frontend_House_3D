"use client";
import { useAppDispatch } from "@/libs/redux/hooks";
import { Button } from "@mui/material";

import { useTheme } from "next-themes";

export default function Home() {
	const { theme, resolvedTheme, setTheme } = useTheme();

	return (
		<main>
			<Button variant="text">Text</Button>
			<Button
				variant="contained"
				onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
			>
				Contained
			</Button>
			<Button variant="outlined">Outlined</Button>
		</main>
	);
}
