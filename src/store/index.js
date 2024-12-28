import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  // // slice가 여러개일 경우, key-value형태로 작성해 여러 리듀서를 병합 가능
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
