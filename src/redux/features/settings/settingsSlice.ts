import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  locale: string;
}

const initialState: SettingsState = {
  locale: navigator.language.substring(0, 2) || "en",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLocale: (state: SettingsState, action: PayloadAction<string>) => {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = settingsSlice.actions;

export default settingsSlice.reducer;
