import { ADD_TAB, REMOVE_TAB, OPEN_TAB, ADD_BOOKMARK, REMOVE_BOOKMARK, CHANGE_BROWSER_TYPE, BrowserTypes } from './actionTypes'
import { combineReducers } from 'redux'

function tabs(state = [], action){
    switch (action.type){
        case ADD_TAB:
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

function bookmarks(state = [], action){
    switch(action.type){
        case ADD_BOOKMARK:
            return Object.assign({}, state, {
                bookmarks: [
                    ...state,
                    {
                        name: action.name,
                        url: action.url
                    }
                ]
            })
        case REMOVE_BOOKMARK:
            return Object.assign({}, state, {
                bookmarks: state.bookmarks.filter((bookmark, i) => {
                    return action.index !== bookmark.index
                })
            })
        default:
            return state
    }
}

function browserType(state = BrowserTypes.CHROME, action){
    switch(action.type){
        case CHANGE_BROWSER_TYPE:
            return action.browser
        default:
            return state
    }
}

function resume(state = {}, action){
    return {
        tabs: tabs(state.tabs, action),
        bookmarks: bookmarks(state.bookmarks, action),
        browserType: browserType(state.browserType, action)
    }
}

export default resume;