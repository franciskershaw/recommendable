import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import PrivateRoute from "./components/layout/PrivateRoute/PrivateRoute";
import SharedLayout from "./components/layout/SharedLayout/SharedLayout";
import {
  CATEGORY_BARS_RESTAURANTS,
  CATEGORY_EVENTS,
  CATEGORY_FILMS,
  CATEGORY_MUSIC,
  CATEGORY_PLACES,
  CATEGORY_TV,
} from "./constants/categories";
import Auth from "./pages/Auth/Auth";
import CategoryPageLayout from "./pages/CategoryPage/CategoryPageLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Auth />} />
          <Route path="/films" element={<PrivateRoute />}>
            <Route
              path="/films"
              element={
                <CategoryPageLayout name={"Films"} category={CATEGORY_FILMS} />
              }
            />
          </Route>
          <Route path="/TV" element={<PrivateRoute />}>
            <Route
              path="/TV"
              element={
                <CategoryPageLayout name={"TV"} category={CATEGORY_TV} />
              }
            />
          </Route>
          <Route path="/music" element={<PrivateRoute />}>
            <Route
              path="/music"
              element={
                <CategoryPageLayout name={"Music"} category={CATEGORY_MUSIC} />
              }
            />
          </Route>
          <Route path="/travel" element={<PrivateRoute />}>
            <Route
              path="/travel"
              element={
                <CategoryPageLayout
                  name={"Travel"}
                  category={CATEGORY_PLACES}
                />
              }
            />
          </Route>
          <Route path="/events" element={<PrivateRoute />}>
            <Route
              path="/events"
              element={
                <CategoryPageLayout
                  name={"Events"}
                  category={CATEGORY_EVENTS}
                />
              }
            />
          </Route>
          <Route path="/bars-restaurants" element={<PrivateRoute />}>
            <Route
              path="/bars-restaurants"
              element={
                <CategoryPageLayout
                  name={"Eat & Drink"}
                  category={CATEGORY_BARS_RESTAURANTS}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
