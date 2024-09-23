import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import PrivateRoute from "./components/layout/PrivateRoute/PrivateRoute";
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
          <Route path="/films" element={<PrivateRoute />}>
            <Route path="/films" element={<Films />} />
          </Route>
          <Route path="/TV" element={<PrivateRoute />}>
            <Route path="/TV" element={<TV />} />
          </Route>
          <Route path="/music" element={<PrivateRoute />}>
            <Route path="/music" element={<Music />} />
          </Route>
          <Route path="/travel" element={<PrivateRoute />}>
            <Route path="/travel" element={<Travel />} />
          </Route>
          <Route path="/events" element={<PrivateRoute />}>
            <Route path="/events" element={<Events />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
