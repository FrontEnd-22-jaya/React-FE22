import { createStore } from "redux";
import reducers from "../Reducers/reducer";

const store = createStore(reducers);

export default store;
