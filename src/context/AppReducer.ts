import { InitialState } from "./AppProvider"

type Action =
    | { type: 'set_page', pageNumber: number }
    | { type: 'set_user_name', userName: string }
    | { type: 'set_first_choice', firstChoice: string }
    | { type: 'set_second_choice', secondChoice: string }
    | { type: 'set_third_choice', thirdChoice: string }
    | { type: 'set_fourth_choice', fourthChoice: string };

export const appReducer = (state: InitialState, action: Action) => {
    switch (action.type) {
        case 'set_page':
            return {
                ...state,
                pageNumber: action.pageNumber
            }
        case 'set_user_name':
            return {
                ...state,
                userName: action.userName
            };
        case 'set_first_choice':
            return {
                ...state,
                firstChoice: action.firstChoice
            };
        case 'set_second_choice':
            return {
                ...state,
                secondChoice: action.secondChoice
            };
        case 'set_third_choice':
            return {
                ...state,
                thirdChoice: action.thirdChoice
            };
        case 'set_fourth_choice':
            return {
                ...state,
                fourthChoice: action.fourthChoice
            };
        default:
            return state
    }
}