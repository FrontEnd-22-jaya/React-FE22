import { configureStore } from "@reduxjs/toolkit";
// import reducers from "../Reducers/reducer";
import userReducer from "../Features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
