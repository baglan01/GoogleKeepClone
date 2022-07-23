import React, {FC, useState , ReactNode} from 'react'

// Контекст Переключения темы

interface IThemeContext {
    darkTheme: boolean;
    column: boolean;
    toggleDarkTheme?: () => void;
    toggleColumn ?: () => void;
}

const defaultState = {
    darkTheme: false,
    column: false
};

interface BaseLayoutProps {
    children?: ReactNode;
}

const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ThemeContextProvider: FC <BaseLayoutProps>= ({ children }) => {
    const [ darkTheme , setDarkTheme ] = useState(defaultState.darkTheme)
    const [ column , setColumn ] = useState(defaultState.column)

    const toggleDarkTheme = () =>{
        setDarkTheme(!darkTheme)
    }

    const toggleColumn = () =>{
        setColumn(!column)
    }

    return (
        <ThemeContext.Provider value={{darkTheme , toggleDarkTheme , column , toggleColumn}}>
            {children}
        </ThemeContext.Provider>
    )

}


export default ThemeContext;
