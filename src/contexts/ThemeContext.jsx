import { createContext, useReducer } from "react";

//theme context
const ThemeContext = createContext();

//themecontext providor

let ThemeReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_THEME' :
            return { ...state, theme : action.payload };
        default :
            return state;
    }
}//no need to re build when function re render, so this function is built outside the function => ThemeContextProvider
const ThemeContextProvider = ({children}) => {
    let [ state,dispatch ] = useReducer(ThemeReducer,{
        theme : 'dark'
    })
    let changeTheme = (theme) => {
        //action = type + payload , means=> {type,payload} , type=name and payload=data
        dispatch({type : 'CHANGE_THEME' , payload : theme});
    }
    return(
        <ThemeContext.Provider value={{ ...state, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}