import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./styles/app.css";

// types
import { VIUState } from "./types/viu.type";

// components
import Loader from "./components/Loader";
import Toast from "./components/Toast";

// routes
import Routes from "./routes";

// actions
import { setUserData } from "./actions/user.action";

const App: React.FC = () => {
  const { isLoading } = useSelector(appSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserData());
  }, [dispatch]);

  return (
    <Router>
      <>
        <Routes />
        {isLoading && <Loader />}
        <Toast />
      </>
    </Router>
  );
};

const appSelector = (state: VIUState) => state.app;

export default App;
