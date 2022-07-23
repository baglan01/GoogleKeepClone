import React, {useContext, useLayoutEffect } from 'react';
import './App.css';
import Header from "./components/macro/Header/Header";
import {createTheme, ThemeProvider , Container , Box } from "@mui/material";
import ThemeContext, {ThemeContextProvider} from "./context/ThemeContext";
import SideBar from "./components/macro/SideBar/SideBar";
import {SideBarContextProvider} from "./context/SideBarContext";
import MainContent from "./components/macro/MainContent/MainContent";
import {NotesContextProvider} from "./context/NotesContext";

const App = () => {

    useLayoutEffect( ()=>{
        document.title = `Keep note`;
    })


    return (
        <ThemeContextProvider>
            <SideBarContextProvider>
                <NotesContextProvider>
                    <Main/>
                </NotesContextProvider>
            </SideBarContextProvider>
        </ThemeContextProvider>
    );
}

const Main = () =>{

    const { darkTheme } = useContext(ThemeContext);

    const lightTheme = createTheme({
        palette: {
            // mode: 'dark',
            primary: {
                // main: '#1976d2',
                main: '#FFFFFF',
            },
            secondary: {
                main: '#020202',
            },
        },
    });


    const ThemeDark = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                // main: '#1976d2',
                main: '#020202',
            },
            secondary: {
                main: '#FFFFFF',
            },
        },
    });



    return(
        <>
            <ThemeProvider theme={ darkTheme ? ThemeDark : lightTheme }>
                <div className='App'>
                    <Box
                        width={'100%'}
                        height={'100%'}
                        sx={ darkTheme ? {background : '#121212'} : {background: 'white'}}
                    >

                        <Header/>

                        <div className={'MainContainer'}>

                            <SideBar/>
                            <MainContent/>

                        </div>
                    </Box>
                    </div>
            </ThemeProvider>

        </>
    )
}

export default App;
