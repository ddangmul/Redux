import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // 리덕스로부터 Provider import

import "./index.css";
import App from "./App";
import store from "./store/index"; // 리덕스 저장소 import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provider에 store porp 값으로 저장소 설정 -> App 및 하위 컴포넌트는 저장소에 접근 가능
  <Provider store={store}>
    <App />
  </Provider>
);
