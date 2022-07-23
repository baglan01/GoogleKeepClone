import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import {Box, Button, IconButton, Typography} from "@mui/material";
import ThemeContext from "../../../context/ThemeContext";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import NotesContext from "../../../context/NotesContext";

// Компонента для создания заметки

const CreateNote = () => {

    const {darkTheme} = useContext(ThemeContext)
    const { noteList , addNote } = useContext(NotesContext)
    const [ isPinned , setPinned ] = useState<Boolean>(false)
    const [ activeCreate , setActiveCreate ] = useState<Boolean>(false)

    const [ noteTitle , setNoteTitle ] = useState('')
    const [ noteText , setNoteText ] = useState('')


    const handleClose = ( event : React.MouseEvent<HTMLButtonElement>) =>{
        event.stopPropagation()
        setActiveCreate(false)


        if(typeof addNote !== 'undefined'){
            addNote({title: noteTitle, text: noteText })
        }
        setNoteText('')
        setNoteTitle('')

    }


    const textAreaAutoResize = ( event : React.ChangeEvent<HTMLTextAreaElement> ) => {
        event.target.style.height = 'auto';
        if( event.target.offsetHeight < event.target.scrollHeight ) {
            event.target.style.height = event.target.scrollHeight + 'px'
        }
    }

    const changeTitle = (event :  React.ChangeEvent<HTMLTextAreaElement>  ) =>{
        textAreaAutoResize(event)
        setNoteTitle(event.target.value)
    }

    const changeText = (event :  React.ChangeEvent<HTMLTextAreaElement>  ) =>{
        textAreaAutoResize(event)
        setNoteText(event.target.value)
    }


    return (
        <Box
            sx={{
                width: '100%',
                display : 'flex',
                alignItems : 'center' ,
                justifyContent : 'center',
                paddingY : '20px'
            }}>

            <Box
                sx={{
                    alignSelf : 'center',
                    justifyContent : 'center',
                    width: '70%',
                    maxWidth : '600px',
                    height: 'fit-content',
                    padding: '8px',
                    background : `${ darkTheme ? '#202124' : 'white' }` ,
                    border: `${ darkTheme ? '2px solid #5f6368' : '2px solid #e0e0e0' }`,
                    borderRadius:'8px',
                    display: 'flex',
                    flexDirection : 'column' ,
                }}
                onClick={ () => {setActiveCreate(true)}}
            >
                {
                    activeCreate &&
                    <Typography
                        sx={{
                            display : 'flex' ,
                            color : `${darkTheme ? 'white' : '#202124'}` ,

                        }}
                    >
                        <textarea className={'myTextArea'} onChange={ e => changeTitle(e) } value={noteTitle} placeholder={'Title'} style={{
                            color : `${darkTheme ? 'white' : '#202124'}`,
                            height : 'fit-content' ,
                            width : '100%',
                        }}/>
                        <IconButton onClick={ () => setPinned(!isPinned)  }>
                            { isPinned ? <PushPinIcon/> : <PushPinOutlinedIcon/> }
                        </IconButton>
                    </Typography>
                }

                <Typography
                    sx={{
                        display : 'flex',
                        color : `${ darkTheme ? 'white' : '#202124'}` ,

                    }}
                >
                    <textarea className={'myTextArea'} onChange={ e => changeText(e) } value={noteText} placeholder={'Take a note...'}  style={{
                        color : `${darkTheme ? 'white' : '#202124'}`,
                        height : 'fit-content' ,
                        width : '100%' ,
                    }}

                    />
                </Typography>

                {
                    activeCreate &&
                    <div className={'CreateNoteFooter'}>
                        <Box>

                        </Box>

                        <Button  onClick={ e => handleClose(e) } sx={{
                            color : `${ darkTheme ? 'white' : '#202124'}`,
                            textTransform: 'none' ,
                            display: 'flex' ,
                            justifySelf : 'end'
                        }}>
                            Close
                        </Button>

                    </div>
                }

            </Box>



        </Box>
    );
};

export default CreateNote;