import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home page</p>
            </Layout>
          }
        >
          {/* Nested Routes */}
          <Route index element={<Home />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return <div>Home Page</div>;
};

const SearchPage = () => {
  return <div>Search Page</div>;
};

export default App;
