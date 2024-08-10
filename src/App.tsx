import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
      </Routes>
    </Router>
  );
}

export default App;
