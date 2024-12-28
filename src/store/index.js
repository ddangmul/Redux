import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  // // slice가 여러개일 경우, key-value형태로 작성해 여러 리듀서를 병합 가능
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// Slice 액션 객체의 메서드를 호출 -> 액션 객체 생성 (식별자 포함)
// => 액션 객체 생성 & 고유 식별자 생각 & 오타 검증 불필요
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
