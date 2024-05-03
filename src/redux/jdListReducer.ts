/** @format */

import { IJob } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const jdListSlice = createSlice({
	name: "jdList",
	initialState: [],
	reducers: {
		addJdList: (state: IJob[], action: PayloadAction<IJob[]>) => {
			// state = [...state, ...action.payload];
			state.push(...action?.payload);
		},
	},
});

export const { addJdList } = jdListSlice.actions;

export default jdListSlice.reducer;
