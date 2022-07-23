import React, {FC, useState , ReactNode} from 'react'

// Контекст для переключения состоянии для переключения стейтов SideBar

interface ISideBarContext {
    openSideBar: boolean;
    chosen : Number;
    toggleOpenSideBar?: () => void;
    toggleActiveSideBar?: (num : Number) => void;
}

const defaultState = {
    openSideBar: true,
    chosen : 0
};

interface BaseLayoutProps {
    children?: ReactNode;
}

const SideBarContext = React.createContext<ISideBarContext>(defaultState);
export const SideBarContextProvider: FC <BaseLayoutProps>= ({ children }) => {
    const [ openSideBar , setOpenSideBar ] = useState(defaultState.openSideBar)
    const [ chosen , setChosen  ] = useState<Number>(defaultState.chosen)

    const toggleOpenSideBar = () =>{
        setOpenSideBar(!openSideBar)
    }

    const toggleActiveSideBar = ( num : Number) =>{
        setChosen(num)
    }

    return (
        <SideBarContext.Provider value={{openSideBar , toggleOpenSideBar , chosen , toggleActiveSideBar}}>
            {children}
        </SideBarContext.Provider>
    )

}


export default SideBarContext;
