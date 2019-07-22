import { ADD_TAB, REMOVE_TAB, OPEN_TAB } from '../actions/_actionTypes'
//import { combineReducers } from 'redux'

function tabs(state = [{ title: "Hi", icon: "There"}], action){
    switch (action.type){
        case ADD_TAB:
            console.log(state);
            return [
                    ...state,
                    {
                        opened: true,
                        title: action.title,
                        icon: action.icon
                    }
                ]
        case REMOVE_TAB:
            return state.filter((tab, i) => {
                return i !== action.index
            })
        case OPEN_TAB:
            return state.map((tab, i) => {
                if (i === action.index){
                    return Object.assign({}, tab, {
                        opened: true
                    })
                } else {
                    return Object.assign({}, tab, {
                        opened: false
                    })
                }
            })
        default:
            return state
    }
}

export default tabs;