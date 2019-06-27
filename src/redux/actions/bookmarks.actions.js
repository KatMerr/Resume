import { ADD_BOOKMARK, REMOVE_BOOKMARK } from './_actionTypes'

export function addBookmark(name, url){
    return {
        type: ADD_BOOKMARK,
        name,
        url
    }
}

export function removeBookmark(index){
    return {
        type: REMOVE_BOOKMARK,
        index
    }
}