import { createSlice } from '@reduxjs/toolkit';

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: prefersDarkMode ? 'dark':  'light',
    },
    reducers: {
        toggle: state => {
            state.value = state.value === 'light' ? 'dark' : 'light';
        },
    },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;