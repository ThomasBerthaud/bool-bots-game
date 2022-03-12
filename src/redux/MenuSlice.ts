import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MenuState {
    openMenu: string | false;
}

const initialState: MenuState = {
    openMenu: false,
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        openMenu: (state, { payload }: PayloadAction<string>) => {
            state.openMenu = payload;
        },
        closeMenu: (state) => {
            state.openMenu = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { openMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
