import { BOOKMARK_JOBS } from "../Actions/action";

export function bookmarkReducer(ApplyState = [], action) {
  if (action.type === BOOKMARK_JOBS) {
    return [...ApplyState, action.payload];
  } else {
    return ApplyState;
  }
}
