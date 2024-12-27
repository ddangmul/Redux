// 리덕스 로직 저장

// const redux = require("redux");
import { createStore } from "redux";

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
}

const store = createStore(counterReducer);

// 리액트 앱과 리덕스 스토어를 연결하기 위해 export
export default store;
