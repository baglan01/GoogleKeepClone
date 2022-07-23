import React, {FC, ReactNode, useState} from 'react';

// Контекст для списка заметок

interface INotesContext {
    noteList: any[] ,
    addNote?: any
}

interface BaseLayoutProps {
    children?: ReactNode;
}

const defaultState = {
    noteList : []
}

// На самом деле можно было default state сразу сделать массивом а не объектом с массивом , просто сначала думал немного по другому сделать , через record  , а потом времени на рефактор не хватило

const NotesContext = React.createContext<INotesContext>(defaultState);

export const NotesContextProvider: FC <BaseLayoutProps>= ({ children }) => {

    const [ noteList , setNoteList ] = useState<any[]>(defaultState.noteList)

    const addNote = ( obj: any ) =>{
        setNoteList( [ obj, ...noteList ] )
    }

    return (

        <NotesContext.Provider value={{noteList , addNote}}>
            {children}
        </NotesContext.Provider>
    )

}

export default NotesContext;