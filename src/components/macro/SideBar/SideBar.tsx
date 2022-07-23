import React, {useContext, useState} from 'react';
import {List, ListItemButton , Typography , IconButton} from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SideBarContext from "../../../context/SideBarContext";
import ThemeContext from "../../../context/ThemeContext";

const SideBar = () => {

    // Компонента сайдбара , отрисовывают компонентов , для начала хотел использовать router , однако не хватило времени

    const {openSideBar , chosen , toggleActiveSideBar} = useContext(SideBarContext)
    const {darkTheme} = useContext(ThemeContext)

    const listElemStyle = {
        width: '100%',
        borderBottomRightRadius : '32px',
        borderTopRightRadius : '32px',
        fontSize : '14px',
        paddingY : '12px',
        paddingLeft : '24px',
        alignItems : 'center',
    }

    const listElemStyleActive = {
        width: '100%',
        borderBottomRightRadius : '32px',
        borderTopRightRadius : '32px',
        fontSize : '14px',
        paddingY : '12px',
        paddingLeft : '24px',
        alignItems : 'center',
        background: `${darkTheme ?  'rgba(255, 255, 255, 0.08)' : 'lightgrey' }`
    }

    const buttonInner = {
        display: 'flex',
        gap : '20px',
        alignItems : 'center',
        padding : '0',
        fontSize : '14px'
    }

    const handleListElemClick = ( element : Number ) => {
        typeof  toggleActiveSideBar !== 'undefined' && toggleActiveSideBar(element)
    }

    return (
        <List sx={ openSideBar ? { width : '280px' , paddingY : '0' , height : 'calc(100% - 8px)'  } : { width : 'fit-content'  , paddingY : '0' , height : 'calc(100% - 8px)' } }>

            <ListItemButton sx={ chosen === 0 ? listElemStyleActive : listElemStyle } onClick={ e => handleListElemClick( e.currentTarget.tabIndex)} tabIndex={0} >
                <IconButton sx={buttonInner}>
                    <LightbulbOutlinedIcon/>
                    {openSideBar && 'Notes'}
                </IconButton>
            </ListItemButton>


            <ListItemButton sx={chosen === 1 ? listElemStyleActive : listElemStyle }  onClick={ e => handleListElemClick( e.currentTarget.tabIndex)} tabIndex={1} >
                <IconButton sx={buttonInner}>
                    <NotificationsNoneOutlinedIcon/>
                    {openSideBar && 'Reminders'}
                </IconButton>
            </ListItemButton>


            <ListItemButton sx={chosen === 2 ? listElemStyleActive : listElemStyle }  onClick={ e => handleListElemClick( e.currentTarget.tabIndex)} tabIndex={2} >
                <IconButton sx={buttonInner}>
                    <CreateOutlinedIcon/>
                    { openSideBar && 'Edit labels' }
                </IconButton>
            </ListItemButton>

            <ListItemButton sx={chosen === 3 ? listElemStyleActive : listElemStyle }  onClick={ e => handleListElemClick( e.currentTarget.tabIndex)} tabIndex={3} >
                <IconButton sx={buttonInner}>
                        <ArchiveOutlinedIcon/>
                    { openSideBar && 'Archive' }
                </IconButton>
            </ListItemButton>

            <ListItemButton sx={chosen === 4 ? listElemStyleActive : listElemStyle }  onClick={ e => handleListElemClick( e.currentTarget.tabIndex)} tabIndex={4} >
                <IconButton sx={buttonInner}>
                    <DeleteOutlineOutlinedIcon/>
                    { openSideBar && 'Trash' }
                </IconButton>
            </ListItemButton>

        </List>
    );
};

export default SideBar;