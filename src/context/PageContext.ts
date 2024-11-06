import { createContext } from "react";

interface PageContextProps {
    pageNumber:number;
    incrementPage:() => void;
    decrementPage:() => void;
}

export const PageContext = createContext<PageContextProps>({} as PageContextProps)