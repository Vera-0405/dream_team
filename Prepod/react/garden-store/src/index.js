import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routes";
import "./index.css";
import { ProductsProvider } from "./contexts/products";
// TODO: scss, Redux, css-in-js, ui libs, ref



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <ProductsProvider>
            <AppRoutes />
        </ProductsProvider>
    </>
);

// TEAM 1
// 1. Daniel
// 2. Vera
// 3. Anastasiya R. LEAD

// TEAM 2
// 1. Mary LEAD
// 2. Anastasiya F.
// 3. Dmitrij
// 4. Ihar
