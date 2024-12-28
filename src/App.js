import { Fragment } from "react";
import { useSelector } from "react-redux";
// useSelector 사용 시 react-redux가 리덕스 저장소에 자동으로 구독을 설정

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfiles from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header isAuthenticated={isAuthenticated} />
      {!isAuthenticated ? <Auth /> : <UserProfiles />}
      <Counter />
    </Fragment>
  );
}

export default App;
