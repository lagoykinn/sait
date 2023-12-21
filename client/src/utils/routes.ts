import BasketPage from "../pages/ru/BasketPage";
import GoodPage from "../pages/ru/GoodPage";
import MainPage from "../pages/ru/MainPage";
import UserPage from "../pages/ru/UserPage";
import { IRoute } from "../types/routes";
import { PublicRoutesEnum } from "./consts";

export const publicRoutes: IRoute[] = [
  { path: PublicRoutesEnum.MainPath, element: MainPage },
  // { path: PublicRoutesEnum.UserPath, element: UserPage },
  { path: PublicRoutesEnum.GoodPath + "/:param" + "/:good", element: GoodPage },
];

export const privateRoutes: IRoute[] = [
  { path: PublicRoutesEnum.UserPath, element: UserPage },
  { path: PublicRoutesEnum.MainPath, element: MainPage },
  { path: PublicRoutesEnum.BasketPath, element: BasketPage },
];
