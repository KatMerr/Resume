import { ADD_TAB, OPEN_TAB, REMOVE_TAB } from './_actionTypes'

export function addTab(title, icon){
    return {
        type:  ADD_TAB,
        title,
        icon
    }
}

export function removeTab(index){
    return {
        type:  REMOVE_TAB,
        index
    }
}

export function openTab(index){
    return {
        type: OPEN_TAB,
        index
    }
}