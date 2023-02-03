import React from "react";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";
import EditProductPage from "./pages/EditProductPage";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/AuthContextProvider";
import Support from "./components/Support/Support";

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        { link: "/", element: <HomePage />, id: 1 },
        { link: "/auth", element: <AuthPage />, id: 2 },
        { link: "/products", element: <ProductPage />, id: 3 },
        { link: "/products/:id", element: <ProductDetailsPage />, id: 4 },
        { link: "*", element: <NotFoundPage />, id: 5 },
        { link: "/contactus", element: <ContactUsPage />, id: 6 },
        { link: "/aboutus", element: <AboutUsPage />, id: 7 },
        { link: "/cart", element: <CartPage />, id: 8 },
        { link: "/support", element: <Support />, id: 8 },

        { link: "/admin", element: <AdminPage />, id: 9 },
        { link: "/edit/:id", element: <EditProductPage />, id: 10 },
    ];

    const PRIVATE_ROUTES = [];

    return (
        <Routes>
            {PUBLIC_ROUTES.map((item) => (
                <Route path={item.link} element={item.element} key={item.id} />
            ))}
            {user
                ? PRIVATE_ROUTES.map((item) => (
                      <Route
                          path={item.link}
                          element={
                              user.email === "admin@admin.com"
                                  ? item.element
                                  : null
                          }
                          key={item.id}
                      />
                  ))
                : null}

            {}
        </Routes>
    );
};

export default MainRoutes;
