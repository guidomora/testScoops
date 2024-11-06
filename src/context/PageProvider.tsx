import { useReducer } from "react";
import { PageContext } from "./PageContext"
import { pageReducer } from "./PageReducer";


const initialState: InitialState = {
    pageNumber:1
}

export interface InitialState {
    pageNumber:number;
}

export const PageProvider = ({ children }:any) => {
    const [state, dispatch] = useReducer(pageReducer, initialState)

    const incrementPage = () => {
        dispatch({type:'increment_page'})
    }

    const decrementPage = () => {
        dispatch({type:'decrement_page'})
    }


    return (
        <PageContext.Provider value={{
            pageNumber: state.pageNumber,
            incrementPage,
            decrementPage
        }}>
            {children}
        </PageContext.Provider>
    )
}