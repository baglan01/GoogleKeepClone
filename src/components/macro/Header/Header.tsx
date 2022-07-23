import React, {FC, useContext} from 'react'
import {AppBar, IconButton, Toolbar, Typography , Avatar , Menu , MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DescriptionIcon from '@mui/icons-material/Description';
import RefreshIcon from '@mui/icons-material/Refresh';

import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

import style from './HeaderStyle.module.css'
import {useState} from "react";
import ThemeContext from "../../../context/ThemeContext";
import SideBarContext from "../../../context/SideBarContext";
import MySearch from "../../micro/MySearch/MySearch";

const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const { darkTheme, toggleDarkTheme , toggleColumn , column } = useContext(ThemeContext);
    const { toggleOpenSideBar } = useContext(SideBarContext);

// Функция для смены темы
    const hadleThemeChange = (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLLIElement> ) => {
        event.preventDefault();
        typeof toggleDarkTheme !== 'undefined' && toggleDarkTheme();
        handleClose()
    };

    // функция для смены состояния сайдбара
    const handleOpenSideBar = ( event: React.MouseEvent<HTMLButtonElement> ) => {
        event.preventDefault();
        typeof toggleOpenSideBar !== 'undefined' && toggleOpenSideBar();
    }


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


// функция для смены вида блоков зааметок
    const changeListView = () => {
        typeof toggleColumn !== 'undefined' && toggleColumn()
    }

    return (
            <AppBar position="sticky">

                <Toolbar
                    sx={{
                        display: 'flex' ,
                        alignItems : 'center',
                        justifyContent : 'space-between'
                }}>

                    <div className={style.headerInnerPart}>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{}}
                            onClick={ e => handleOpenSideBar(e) }
                        >
                            <MenuIcon />


                        </IconButton>

                        <Typography
                            variant={"h6"}
                            sx={{
                                display: 'flex' ,
                                alignItems : 'center'
                            }}>
                            <DescriptionIcon fontSize="large" sx={{ mr:1 }}/>
                            Keep
                        </Typography>

                        <MySearch/>

                    </div>

                    <div className={style.headerInnerPart} style={ { gap : '30px' } }>

                        <div className={style.headerInnerPart}>

                            <IconButton>
                                <RefreshIcon/>
                            </IconButton>

                            <IconButton onClick={ () => changeListView() }>
                                {column ?
                                    <ViewAgendaOutlinedIcon/>
                                    :
                                    <GridViewOutlinedIcon/>
                                }
                            </IconButton>

                            <IconButton
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <SettingsOutlinedIcon/>

                            </IconButton>

                            <div>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                    sx={{display: 'flex' , flexDirection : 'column'}}
                                >


                                    <MenuItem onClick={ () => handleClose() } sx={{fontSize : '14px' }}>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={ event => hadleThemeChange(event)} sx={{fontSize : '14px' }}>
                                            { darkTheme ?  'Disable Dark Mode' : 'Enable Dark Mode' }
                                    </MenuItem>
                                    <MenuItem onClick={ () => handleClose()} sx={{fontSize : '14px' }} >
                                        My account
                                    </MenuItem>
                                    <MenuItem onClick={ () => handleClose()} sx={{fontSize : '14px' }} >
                                        Logout
                                    </MenuItem>

                                </Menu>
                            </div>

                        </div>

                        <div className={style.headerInnerPart}>

                            <IconButton>
                                <AppsOutlinedIcon/>
                            </IconButton>

                            <Avatar sx={{ bgcolor: '#420997' , width: 32, height: 32  }}>B</Avatar>

                        </div>


                        </div>

                </Toolbar>
            </AppBar>
    )
}

export default Header;