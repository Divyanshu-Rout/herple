import Layout from "./component/common/layout/Layout";
import Home from "./pages";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Blog from "./pages/blogs";
import Shop from "./pages/shop";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/blogs"
        element={
          <Layout>
            <Blog />
          </Layout>
        }
      />
      <Route
        path="/shop"
        element={
          <Layout>
            <Shop />
          </Layout>
        }
      />
      <Route
        path="auth"
        element={
          <Layout>
            <Auth />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
