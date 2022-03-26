import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import arenaReducer from "./ArenaSlice";
import menuReducer from "./MenuSlice";
import arenaSagas from "./ArenaSagas";

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
    yield all([...arenaSagas]);
}

export const store = configureStore({
    reducer: {
        arena: arenaReducer,
        menu: menuReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
