import { useSelector, useDispatch } from "react-redux";
// useSelector 사용 시 react-redux가 리덕스 저장소에 자동으로 구독을 설정

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch(); // 실행가능한 dispatch 함수 생성
  const counter = useSelector((state) => state.counter); // 리덕스가 함수 실행: 상태 객체에서 일부분만 잘라내기
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "increment" }); // 리덕스 저장소에 있는 식별자 사용
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 }); // 추가 속성은 리듀서에 작성한 속성명과 일치
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increse by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
