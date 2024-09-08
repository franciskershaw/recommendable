import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import SharedLayout from "./components/layout/SharedLayout/SharedLayout";
import Auth from "./pages/Auth/Auth";
import Events from "./pages/Categories/Events/Events";
import Films from "./pages/Categories/Films/Films";
import Music from "./pages/Categories/Music/Music";
import Travel from "./pages/Categories/Travel/Travel";
import TV from "./pages/Categories/TV/TV";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Auth />} />
          <Route path="/films" element={<Films />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/music" element={<Music />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/events" element={<Events />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
