import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

// --------------- Importing Files ---------------
import About from "./pages/About";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

// --------------- Routings Files ---------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "categories", element: <Categories /> },
      { path: "contact", element: <Contact /> },
      { path: "profile", element: <Profile /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "product", element: <Product /> },
    ],
  },
]);

// --------------- xxxxxxxxxxxx ---------------

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
