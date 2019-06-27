import { ADD_BOOKMARK, REMOVE_BOOKMARK } from '../actions/_actionTypes'

function bookmarks(state = [], action){
    switch(action.type){
        case ADD_BOOKMARK:
            return  [
                    ...state,
                    {
                        name: action.name,
                        url: action.url
                    }
                ]
        case REMOVE_BOOKMARK:
            return state.bookmarks.filter((bookmark, i) => {
                    return action.index !== bookmark.index
                })
        default:
            return state
    }
}

export default bookmarks;