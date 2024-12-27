// 1. npm init -y
// 2. npm install redux

// 3. redux import
const redux = require("redux");

// 4. 리듀서 함수 생성
// 리덕스 라이브러리에 의해 호출
// 2개 인수 받음. 기존 상태, 발송된 액션
// 새로운 상태 객체(어떠한 값 유형도 이론적으로 가능)를 리턴
// 순수한 함수. 함수 내에서 어떤 부수 효과도 X
const counterReducer = (state = { counter: 0 }, action) => {
  // action type에 따른 작업 정의
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
};

// 5. 저장소 생성 : 어떤 리듀서가 저장소 데이터를 조작하는지 리덕스에게 알려줘야 함
const store = redux.createStore(counterReducer);

// console.log(store.getState()); //{ counter: 1 }

// 구독 함수 정의
const counterSubscriber = () => {
  // 상태 변경될 때마다 트리거
  const latesState = store.getState(); // 최신 상태 스냅샷 받음
  console.log(latesState);
};

// 6. 저장소 구독: 상태 변경 시마다 구독 함수 실행
store.subscribe(counterSubscriber);

// 7. 액션 디스패치
store.dispatch({ type: "increment" }); // { counter: 1 }
store.dispatch({ type: "decrement" }); // { counter: 0 }
