import { useReducer } from "react";
import { AppContext } from "./AppContext"
import { appReducer } from "./AppReducer";


const initialState: InitialState = {
    pageNumber:1,
    userName:'',
    firstChoice:'',
    secondChoice:'',
    thirdChoice:'',
    fourthChoice:''
}

export interface InitialState {
    pageNumber:number;
    userName:string;
    firstChoice:string;
    secondChoice:string;
    thirdChoice:string;
    fourthChoice:string;
}

export const AppProvider = ({ children }:any) => {
    const [state, dispatch] = useReducer(appReducer, initialState)
    const setPage = (pageNumber:number) => {
        dispatch({type:'set_page', pageNumber})
    }

    const setUserName = (userName: string) => {
        dispatch({ type: 'set_user_name', userName });
    };

    const setFirstChoice = (firstChoice: string) => {
        dispatch({ type: 'set_first_choice', firstChoice });
    };

    const setSecondChoice = (secondChoice: string) => {
        dispatch({ type: 'set_second_choice', secondChoice });
    };

    const setThirdChoice = (thirdChoice: string) => {
        dispatch({ type: 'set_third_choice', thirdChoice });
    };

    const setFourthChoice = (fourthChoice: string) => {
        dispatch({ type: 'set_fourth_choice', fourthChoice });
    };


    return (
        <AppContext.Provider value={{
            pageNumber: state.pageNumber,
            setPage,
            userName: state.userName,
            firstChoice: state.firstChoice,
            secondChoice: state.secondChoice,
            thirdChoice: state.thirdChoice,
            fourthChoice: state.fourthChoice,
            setUserName,
            setFirstChoice,
            setSecondChoice,
            setThirdChoice,
            setFourthChoice
        }}>
            {children}
        </AppContext.Provider>
    )
}