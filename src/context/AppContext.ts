import { createContext } from "react";

interface AppContextProps {
    pageNumber:number;
    setPage:(pageNumber:number) => void;
    userName:string;
    setUserName:(userName:string) => void;
    firstChoice:string;
    setFirstChoice:(firstChoice:string) => void;
    secondChoice:string;
    setSecondChoice:(secondChoice:string) => void;
    thirdChoice:string;
    setThirdChoice:(thirdChoice:string) => void;
    fourthChoice:string;
    setFourthChoice:(fourthChoice:string) => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)