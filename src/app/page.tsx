"use client";
import { Button, Card } from "antd";
import { useTheme } from "next-themes";

export default function Home() {
	const { resolvedTheme, setTheme } = useTheme();
	return (
		<main>
			<Card style={{ width: "max-content" }}>
				<Button
					onClick={() => {
						setTheme(resolvedTheme === "light" ? "dark" : "light");
						console.log("Home ~ resolvedTheme:", resolvedTheme);
					}}
				>
					{resolvedTheme === "light" ? "Dark" : "Light"}
				</Button>
			</Card>
		</main>
	);
}
