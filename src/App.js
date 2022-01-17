import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { defaultRounter } from "./configs/router";
import "antd/dist/antd.css";
import AdminRole from "./pages/Admin-Role";
function App() {
  const renderDefaultRouter = () => {
    return defaultRounter.map(({ path, exact, Component }, index) => {
      return (
        <Route
          key={index}
          exact={exact}
          path={path}
          element={Component}
        ></Route>
      );
    });
  };
  return (
    <div className="app__roots">
      <Router>
        <Routes>{renderDefaultRouter()}</Routes>
      </Router>
    </div>
  );
}

export default App;
