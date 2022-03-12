import { configureStore } from "@reduxjs/toolkit";
import arenaReducer from "../domain/arena/ArenaSlice";

export const store = configureStore({
    reducer: {
        arena: arenaReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
