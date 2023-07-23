import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function useTheme(){
    let contexts = useContext(ThemeContext);
    if(contexts==undefined){
        new Error('Theme context should be use in ThemeContextProvider');
    }
    return contexts;
}