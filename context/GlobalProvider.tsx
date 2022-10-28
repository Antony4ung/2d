import React, { createContext, useState, useMemo } from "react";
import { GlobalContextType, Prop } from "../types";
import { ThemeProvider, createTheme } from '@mui/material/styles';
export const GlobalContext = createContext({} as GlobalContextType);

const GlobalProvider = ({ children }: Prop) => {
    const [mode, setMode] = React.useState<"light" | "dark">("dark");
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        dark: '#0c1c4a',
                        main:'#12286A',
                        light:'#415387'
                    }
                },
            }),
        [mode]
    );

    return (
        <GlobalContext.Provider
            value={{ toggleColorMode: colorMode.toggleColorMode }}
        >
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
