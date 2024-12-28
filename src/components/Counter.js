import { useSelector } from "react-redux";
// useSelector 사용 시 react-redux가 리덕스 저장소에 자동으로 구독을 설정

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter); // 리덕스가 함수 실행: 상태 객체에서 일부분만 잘라내기

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
