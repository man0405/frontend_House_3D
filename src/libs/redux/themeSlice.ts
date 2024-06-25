import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const isBrowser = typeof window !== "undefined";

const mode: PaletteMode =
	(isBrowser && (localStorage.getItem("theme") as PaletteMode)) || "light";

const themeSlice = createSlice({
	name: "theme",
	initialState: { mode },
	reducers: {
		toggleTheme(state) {
			state.mode = state.mode === "light" ? "dark" : "light";
			isBrowser && localStorage.setItem("theme", state.mode);
		},
	},
});

export default themeSlice;
export const themeActions = themeSlice.actions;
