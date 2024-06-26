/** @format */

import { configureStore } from "@reduxjs/toolkit";
import jdListReducer from "./jdListReducer";
import jdToShowReducer from "./jdToShow.reducer";

export const store = configureStore({
	reducer: {
		jdList: jdListReducer,
		jdToShow: jdToShowReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
