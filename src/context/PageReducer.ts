import { InitialState } from "./PageProvider"

type Action = 
| {type:'increment_page'}
| {type:'decrement_page'}

export const pageReducer = (state: InitialState, action: Action) => {
    switch (action.type) {
        case 'increment_page':
            return {
                ...state,
                pageNumber: state.pageNumber === 6 ? state.pageNumber + 0 : state.pageNumber + 1
            }
        case 'decrement_page':
            return {
                ...state,
                pageNumber: state.pageNumber === 1 ? state.pageNumber + 0 : state.pageNumber - 1
            }
        default:
            return state
    }
}