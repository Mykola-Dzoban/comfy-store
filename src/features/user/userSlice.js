import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  light: "cmyk",
  dark: "dracula",
};

const getThemeFromStorage = () => {
  const theme = localStorage.getItem("theme") || themes.light;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: "coding addict" },
  theme: getThemeFromStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state, action) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully!");
    },
    toggleTheme: (state, action) => {
      const { light, dark } = themes;
      state.theme = state.theme === dark ? light : dark;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
