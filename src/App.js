import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieAction } from "./redux/action/movieAction";
import HomePage from "./pages/Default-Role/Home";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: movieAction.FETCH_DATA_SAGA });
  }, []);
  return (
    <div className="app__root">
      <HomePage />
    </div>
  );
}

export default App;
