import { combineReducers } from "redux";
import media from './mediaReducer'
const rootReducer = combineReducers({
    media:media
});

export default rootReducer;
