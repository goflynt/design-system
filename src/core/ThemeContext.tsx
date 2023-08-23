// Libs
import React, { useContext } from "react";

export type Theme = "light" | "dark" | "color";

export interface ThemeContextValue {
    theme: Theme;
}

const ThemeContext = React.createContext<ThemeContextValue>({ theme: "light" });

const THEME_REVERSE: Record<Theme, Theme> = {
    light: "dark",
    dark: "light",
    color: "color",
};

export function useTheme() {
    return useContext(ThemeContext);
}

export interface ThemeProviderProps extends React.PropsWithChildren<unknown> {
    /**
     * Additional className for Theme
     */
    className?: string;
    /**
     * Theme value
     */
    theme?: Theme | "reverse";
}

export function ThemeProvider({ children, className, theme: themeProp, ...otherProps }: ThemeProviderProps) {
    const { theme: themeContext } = useTheme();

    let theme: Theme;

    if (themeProp === "reverse") {
        theme = THEME_REVERSE[themeContext];
    } else {
        theme = themeProp ?? themeContext;
    }

    const rootClassName = clsx(
        {
            "ds-theme--light": theme === "light",
            "ds-theme--dark": theme === "dark",
            "ds-theme--color": theme === "color",
        },
        className
    );

    return (
        <ThemeContext.Provider value={{ theme }}>
            <div {...otherProps} className={rootClassName}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}
