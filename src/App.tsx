import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import SharedLayout from "./components/layout/SharedLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<div>Hello</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
