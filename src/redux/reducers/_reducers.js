import bookmarksReducer from './bookmarks.reducer'
import browserTypeReducer from './browser-type.reducer'
import tabsReducer from './tabs.reducer'
import { combineReducers } from 'redux'

const resume = combineReducers({ bookmarksReducer, browserTypeReducer, tabsReducer});

/* This is equivalent to the combine Reducers function located above.
function resume(state = {}, action){
    return {
        tabs: tabs(state.tabs, action),
        bookmarks: bookmarks(state.bookmarks, action),
        browserType: browserType(state.browserType, action)
    }
}*/

export default resume;