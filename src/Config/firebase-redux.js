import { combineReducers, createStore } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import * as firebase from "firebase";

const rootReducer = combineReducers({
 firebase : firebaseReducer
})

const initialState = {}

const store = createStore(rootReducer , initialState)

const authConfig = {

}
const authProps = {
    firebase,
    conFig : authConfig,
    dispatch : store.dispatch
}
export function getReduxStore() {
    return store
}
export function getRrfProps() {
    return authProps
}
