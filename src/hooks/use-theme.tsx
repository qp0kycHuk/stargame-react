import React, { useState, useEffect, useContext, createContext, ReactNode } from "react";
import getCookie from "../service/getCookie";


export interface ITheme {
	key: string | number
	name: 'light' | 'dark'
}

export const defaultTheme: ITheme = { key: '1', name: 'light' };
export const darkTheme: ITheme = { key: '2', name: 'dark' };

const themes: ITheme[] = [
	defaultTheme,
	darkTheme
]



const themeContext = createContext<IThemeProvideValue>({ theme: defaultTheme });

interface IProviderProps {
	children?: ReactNode | ReactNode[]
}

export function ThemeProvider({ children }: IProviderProps) {
	const providedTheme = useProvideTheme();
	return <themeContext.Provider value={providedTheme} >{children} </themeContext.Provider>;
}

export const useTheme = (): IThemeProvideValue => {
	return useContext<IThemeProvideValue>(themeContext);
};

interface IThemeProvideValue {
	theme: ITheme
	setTheme?: Function
}

function useProvideTheme(): IThemeProvideValue {
	const [theme, setTheme] = useState<ITheme>(defaultTheme);


	useEffect(() => {
		initTheme();
		document.addEventListener('keyup', keyupHandler);

		const unsubscribe = () => {
			document.removeEventListener('keyup', keyupHandler);

		}

		return () => unsubscribe();
	}, []);

	useEffect(() => {
		const activeThemeJson = JSON.stringify(theme);
		document.cookie = 'activeThemeJson=' + activeThemeJson + '; path=/; expires=Tue, 19 Jan 2138 03:14:07 GMT'
		if (theme) {
			document.body.setAttribute('data-theme', theme.name);
		}
	}, [theme])

	function initTheme() {
		const activeThemeJson = getCookie('activeThemeJson');
		if (!activeThemeJson) {
			setTheme(defaultTheme);
			return;
		}
		try {
			const oldActiveTheme = JSON.parse(activeThemeJson);
			setTheme(oldActiveTheme);
		} catch {
			setTheme(defaultTheme);
		}
	}

	function keyupHandler(event: KeyboardEvent) {
		for (const i in themes) {
			if (!themes.hasOwnProperty(i)) continue;
			if (event.key == themes[i].key && event.altKey) {
				setTheme(themes[i])
				return;
			}
		}
	}

	return { theme, setTheme };
}