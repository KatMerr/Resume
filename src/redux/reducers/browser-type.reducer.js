import { CHANGE_BROWSER_TYPE, BrowserTypes } from '../actions/_actionTypes'


function browserType(state = BrowserTypes.CHROME, action){
    switch(action.type){
        case CHANGE_BROWSER_TYPE:
            return action.browser
        default:
            return state
    }
}

export default browserType;