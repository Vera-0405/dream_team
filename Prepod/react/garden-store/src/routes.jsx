import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Product } from "./pages/Product";
import { NotFound } from "./pages/NotFound";
import { Categories } from "./pages/Categories";
import { Catalog } from "./pages/Catalog";
import { Template } from "./pages/Template";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Main />} />
          <Route path="/product" >
            <Route path=":id"  element={<Product />}/>
          </Route>
          <Route path="/categories">
            <Route path="catalog" element={<Catalog />} />
            <Route index element={<Categories />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
