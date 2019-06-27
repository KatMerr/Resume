import { CHANGE_BROWSER_TYPE } from './_actionTypes'

export function changeBrowserType(browser){
    return {
        type: CHANGE_BROWSER_TYPE,
        browser
    }
}