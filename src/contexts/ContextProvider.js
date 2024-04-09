import React, {createContext, useContext, useStaet} from 'react';
import { userProfileData } from '../data/dummy';
import { useState } from 'react';

const stateContext = createContext();

const initialState ={
    chat: false,
    cart: false,
    notification:false,
    userProfile:false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState (true);
    const [isClicked, setIsClicked] = useState(initialState);  
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setcurrentColor] = useState('#03C9D7');
    const [currentMode, setcurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setcurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false);
    }
    const setColor = (color) => {
        setcurrentColor(color);

        localStorage.setItem('colorMode', color);

        setThemeSettings(false);
    }
    const handleClick = (clicked) => { setIsClicked ({...initialState, [clicked]: true});}

    return(
        <stateContext.Provider
            value={{ 
                activeMenu,
                setActiveMenu,
                isClicked, 
                setIsClicked, 
                handleClick, 
                screenSize, 
                setScreenSize,
                currentColor,
                currentMode,
                themeSettings, setThemeSettings,
                setColor, setMode
            }}>
            {children}
       </stateContext.Provider> 
    )
}

export const  useStateContext = () => useContext (stateContext);