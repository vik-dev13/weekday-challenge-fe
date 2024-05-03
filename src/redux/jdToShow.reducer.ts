/** @format */

import { IJob } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IJob[] | [] = [];
export const jdsToShowSlice = createSlice({
	name: "jdsToShow",
	initialState,
	reducers: {
		addJdToShowList: (state: IJob[], action: PayloadAction<IJob[]>) => {
			// state = [...state, ...action.payload];
			return [...action?.payload];
		},
	},
});

export const { addJdToShowList } = jdsToShowSlice.actions;

export default jdsToShowSlice.reducer;
