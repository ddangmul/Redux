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
  return {
    counter: state.counter + 1, // 처음 실행 시 기존 상태가 없어서 오류뜨니 초기값 설정 필요. 첫 로깅 시 counter는 1 (0 + 1)
  };
};

// 5. 저장소 생성 : 어떤 리듀서가 저장소 데이터를 조작하는지 리덕스에게 알려줘야 함
const store = redux.createStore(counterReducer);

// console.log(store.getState()); //{ counter: 1 }

const counterSubscriber = () => {
  // 상태 변경될 때마다 트리거
  const latesState = store.getState(); // 최신 상태 스냅샷 받음
  console.log(latesState);
};

// 6. 저장소 구독: 상태 변경 시마다 구독 함수 실행
store.subscribe(counterSubscriber);

// 7. 액션 발송
store.dispatch({ type: "increment" }); // 이후 로깅 시 { counter: 2 }
