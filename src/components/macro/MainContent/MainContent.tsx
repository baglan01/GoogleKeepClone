import React, {useContext, useLayoutEffect, useState} from 'react';
import {Container, Box, Stack} from "@mui/material";
import NoteElem from "../../micro/Note/NoteElem";
import CreateNote from "../../micro/CreateNote/CreateNote";
import NotesContext from "../../../context/NotesContext";
import ThemeContext from "../../../context/ThemeContext";


const MainContent = () => {

    // Компонента для отрисовки заметок

    const { noteList } = useContext(NotesContext)
    const { column } = useContext(ThemeContext)


    return (

            <Container
            sx={{
                flexDirection : 'column',
                justifyContent: 'center',
                alignItems: 'start',
                height : 'calc(100% - 8px)',
                overflowY : 'auto'
                }}>

                <CreateNote/>

                <Stack
                    direction = { column ? 'column' : 'row' }
                    justifyContent = "flex-start"
                    alignItems={ column ? 'center' : 'flex-start' }
                    sx={{
                        display: 'flex',
                        width : '100%',
                        flexWrap: 'wrap',
                        gap : '16px' ,
                        marginTop : '16px'
                    }}
                >
{/*Отрисовка заметок*/}
                    {
                        noteList?.map((item, i) => {
                            return (
                                <NoteElem key={i} title={item?.title} text={item?.text} />
                            );
                        })
                    }

                </Stack>


            </Container>
    );
};

export default MainContent;