import { combineReducers } from "redux"
import { postLikeReducer } from "./postLikeReducer";

export const rootReducer = combineReducers({
    postLikeState:postLikeReducer,
})
