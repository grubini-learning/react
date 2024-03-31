import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  AppLayout,
  HomePage,
  Login,
  PageNotFound,
  Pricing,
  Product,
} from "./pages";

import { CitiesProvider } from "./contexts";

import "./index.css";
import { City, CityList, CountryList } from "./components";
import Form from "./components/Form";

const App = (): React.JSX.Element => {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
};

export default App;
