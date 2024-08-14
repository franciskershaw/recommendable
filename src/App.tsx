import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import SharedLayout from "./components/layout/SharedLayout";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Auth />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
