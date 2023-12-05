import { browser } from '$app/environment';
import { persistStore } from './persistStore';

// Gives the inital value of theme preferences and it comes from the setting in the OS
const prefersDarkMode = browser ? window.matchMedia('(prefers-color-scheme: dark)') : null;
const defaultPreference = prefersDarkMode?.matches ? 'true' : 'false';

export const isDarkTheme = persistStore('darkTheme', JSON.parse(defaultPreference));
