import * as ACTIONTYPES from './actionTypes'

export function addTab(title, icon){
    return {
        type: ACTIONTYPES.ADD_TAB,
        title,
        icon
    }
}

export function removeTab(index){
    return {
        type: ACTIONTYPES.REMOVE_TAB,
        index
    }
}

export function openTab(index){
    return {
        type:ACTIONTYPES.OPEN_TAB,
        index
    }
}

export function addBookmark(name, url){
    return {
        type: ACTIONTYPES.ADD_BOOKMARK,
        name,
        url
    }
}

export function removeBookmark(index){
    return {
        type: ACTIONTYPES.REMOVE_BOOKMARK,
        index
    }
}

export function changeBrowserType(browser){
    return {
        type: ACTIONTYPES.CHANGE_BROWSER_TYPE,
        browser
    }
}