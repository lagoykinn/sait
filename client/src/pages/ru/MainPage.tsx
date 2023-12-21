import React, { useEffect, useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import Navbar from "../../components/Navbar";
import styles from "../../styles/MainPage.module.scss";
import NavigationPanel from "../../components/UI/NavigationPanel";
import wallet from "../../assets/benefits/wallet.png";
import medal from "../../assets/benefits/medal.png";
import lowPrice from "../../assets/benefits/lowPrice.png";
import BasketGood from "../../components/UI/CatalogGood";
import { useActions } from "../../hooks/useActions";
import { getShoes } from "../../http/shoesApi";
import axios from "axios";
import { $user } from "../../http";
import GoodCard from "../../components/UI/CatalogGood";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IShoes } from "../../types/shoes";

const MainPage = () => {
  const { fetchShoes } = useActions();
  const { shoes, isLoading } = useTypedSelector((state) => state.shoes);
  const [shoesState, setShoesState] = useState<any>([]);

  useEffect(() => {
    fetchShoes();
    console.log(localStorage.getItem("goods"))
  }, []);

  useEffect(() => {
    const goods: any = localStorage.getItem("goods")
    const parsed: IShoes[] = JSON.parse(goods)
    setShoesState(parsed)
  }, []);

  return (
    <MainLayout>
      <div className={styles.grid__container}>
        <NavigationPanel />
        <div className={styles.left__section}>
          <div className={styles.benefit__container}>
            <div className={styles.benefit__item}>
              <img src={wallet} />
              <span>Наличный безналичный расчет</span>
            </div>
            <div className={styles.benefit__item}>
              <img src={medal} />
              <span>Наличный безналичный расчет</span>
            </div>
            <div className={styles.benefit__item}>
              <img src={lowPrice} />
              <span>Наличный безналичный расчет</span>
            </div>
          </div>
          <div className={styles.goods__container}>
            {shoesState && shoesState.map((e: IShoes) => <GoodCard type={e.type.type} brand={e.brand.brand} color={e.color} info={e.info} model={e.model} price={e.price} shoes={e.shoes} size={e.size}  />)}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MainPage;
