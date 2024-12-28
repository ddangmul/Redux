import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
// useSelector 사용 시 react-redux가 리덕스 저장소에 자동으로 구독을 설정

import classes from "./Counter.module.css";

// const Counter = () => {
//   const dispatch = useDispatch(); // 실행가능한 dispatch 함수 생성
//   const counter = useSelector((state) => state.counter); // 리덕스가 함수 실행: 상태 객체에서 일부분만 잘라내기

//   const incrementHandler = () => {
//     dispatch({ type: "increment" }); // 리덕스 저장소에 있는 식별자 사용
//   };

//   const decrementHandler = () => {
//     dispatch({ type: "decrement" });
//   };

//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>increment</button>
//         <button onClick={decrementHandler}>decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component {
  incrementHandler() {
    // dispatch({ type: "increment" });
    this.props.increment();
  }

  decrementHandler() {
    // dispatch({ type: "decrement" });
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>increment</button>
          <button onClick={this.decrementHandler.bind(this)}>decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

// connect: useSelect, useDispatch 대안 - 구독 관리
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
