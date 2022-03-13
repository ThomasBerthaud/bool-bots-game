import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MenuState {
    openedMenu: string | false;
}

const initialState: MenuState = {
    openedMenu: false,
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        openMenu: (state, { payload }: PayloadAction<string>) => {
            state.openedMenu = payload;
        },
        closeMenu: (state) => {
            state.openedMenu = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { openMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
