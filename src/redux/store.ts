import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import arenaReducer from "./ArenaSlice";
import menuReducer from "./MenuSlice";
import arenaSaga from "./ArenaSagas";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        arena: arenaReducer,
        menu: menuReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(arenaSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
