import React, {FC, useContext} from 'react';
import {Box, Typography} from "@mui/material";
import ThemeContext from "../../../context/ThemeContext";


interface INoteInfo {
    title ?: String ,
    text ?: String
}

// Компонента самой заметки

const NoteElem : FC <INoteInfo>= ( noteInfo ) => {

    const {darkTheme} = useContext(ThemeContext)

    return (
        <Box
            sx={{
                width: '240px',
                height: 'fit-content',
                padding: '8px',
                background : `${ darkTheme ? '#202124' : 'white' }` ,
                border: `${ darkTheme ? '2px solid #5f6368' : '2px solid #e0e0e0' }`,
                borderRadius:'8px',
                display: 'flex',
                flexDirection : 'column' ,
            }}
        >
            <Typography
            sx={{
                fontSize: '14px',
                color : `${ darkTheme ? 'white' : '#202124' }`,
            }}
            >
                {noteInfo.title}
            </Typography>

            <Typography
            sx={{
                fontSize: '12px',
                color : `${ darkTheme ? 'white' : '#202124' }` ,
            }}>
                {noteInfo.text}
            </Typography>

        </Box>
    );
};

export default NoteElem;