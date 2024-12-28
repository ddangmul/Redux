import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // 어떤 액션을 했느냐에 따라 메서드가 자동으로 호출됨 -> if문 작성 불필요
    increment(state) {
      state.counter++; // 기존 상태를 바꾸는 게 아님. 툴킷이 내부적으로 원래 상태를 복제함 -> 매번 상태 코드 복사 불필요
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // payload 필요해서 action 받음
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounterounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  // 설정 객체 전달
  reducer: counterSlice.reducer, // 리듀서가 하나일 경우, 전역 상태를 담당하는 주요 리듀서로 사용

  // // slice가 여러개일 경우, key-value형태로 작성해 여러 리듀서를 병합 가능
  // reducer: {counter: counterSlice.reducer}
});
export default store;
