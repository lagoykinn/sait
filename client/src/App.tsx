import React, { FC } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { privateRoutes, publicRoutes } from "./utils/routes";
import { IRoute } from "./types/routes";
import Navbar from "./components/Navbar";
import { PublicRoutesEnum } from "./utils/consts";
import NavigateSetter from "./components/Functions/Navigate";

const App: FC = () => {
  const isAuth = Boolean(localStorage.getItem("isAuth"));

  return (
    <BrowserRouter>
      <NavigateSetter />
      <Routes>
        {isAuth
          ? privateRoutes.map((e) => (
              <Route path={e.path} element={<e.element />} />
            ))
          : publicRoutes.map((el: IRoute) => (
              <Route path={el.path} key={el.path} element={<el.element />} />
            ))}
        <Route path="*" element={<Navigate to={PublicRoutesEnum.MainPath} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
