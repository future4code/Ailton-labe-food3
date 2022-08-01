import React, { useEffect, useState } from "react";
import { useProtectPage } from "../../hooks/useProtectPage";
import Header from "../../component/Header/Header";
import { requestData } from "../../services/requestAPI";
import CardHome from "../../component/CardHome/CardHome";

export default function HomePage() {
  useProtectPage();
  const [data, setData] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    requestData("get", "restaurants", "", token, setData);
  }, []);
  console.log(data);

  const getData = data?.restaurants?.map((item) => {
    return <CardHome item={item} key={item.id} />;
  });
  return (
    <div>
      <Header title={"Ifuture"} />
      <input placeholder="Restaurante" />
      <div>{getData} </div>
    </div>
  );
}
