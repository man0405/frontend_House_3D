"use client";
import { useAppDispatch } from "@/libs/redux/hooks";
import { Button } from "@mui/material";
import { themeActions } from "@/libs/redux/themeSlice";
export default function Home() {
	const dispatch = useAppDispatch();

	return (
		<main>
			<Button variant="text">Text</Button>
			<Button
				variant="contained"
				onClick={() => {
					dispatch(themeActions.toggleTheme());
				}}
			>
				Contained
			</Button>
			<Button variant="outlined">Outlined</Button>
		</main>
	);
}
