import { combineReducers } from "redux";
import { bookmarkReducer } from "./BookmarkReducer";

const reducers = combineReducers({
  book: bookmarkReducer,
});

export default reducers;
