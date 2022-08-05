import React, { useEffect, useState } from "react";
import { useProtectPage } from "../../hooks/useProtectPage";
import Header from "../../component/Header/Header";
import { requestData } from "../../services/requestAPI";
import CardHome from "../../component/CardHome/CardHome";
import { CardContainer, InputSearch, FilterCategory, Msg } from "./styled";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "../../assets/img/search.png";
import TextField from "@mui/material/TextField";
import Footer from "../../component/Footer/Footer";
import PopUpOrder from "../../component/PopUpOrder/PopUpOrder";
import CategorySelected from "../../component/CategorySelected/CategorySelected";
import { LoaderContainer, Space } from "../../global/GeneralStyled";
import { CircularProgress } from "@mui/material";

export default function HomePage() {
  useProtectPage();
  const [data, setData] = useState("");
  const [order, setOrder] = useState("");
  const [select, setSelect] = useState("Todos");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    requestData("get", "restaurants", "", token, setData);
    requestData("get", "active-order", "", token, setOrder);
  }, []);

  const getData = data?.restaurants?.map((item) => {
    if (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (item.category === select || "Todos" === select)
    ) {
      return <CardHome item={item} key={item.id} />;
    }
  });

  const filteredRestaurants = getData?.filter((item) => {
    if (item !== undefined) {
      return item;
    }
  });

  const getCategory = data?.restaurants?.map((item) => {
    return (
      <CategorySelected
        key={item.id}
        category={item}
        select={select}
        setSelect={setSelect}
      />
    );
  });
  return (
    <div>
      <Header title={search === "" ? "Ifuture" : "Busca"} />
      <InputSearch>
        <TextField
          id="input-with-icon-textfield"
          variant="outlined"
          placeholder="Restaurantes"
          fullWidth
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Search} alt="lupinha" />
              </InputAdornment>
            ),
          }}
        />
      </InputSearch>
      <FilterCategory>
        <CategorySelected
          key={Date.now}
          category={{ category: "Todos" }}
          select={select}
          setSelect={setSelect}
        />
        {getCategory}
      </FilterCategory>
      {!data && (
        <LoaderContainer>
          <CircularProgress style={{ color: "red" }} />
        </LoaderContainer>
      )}
      {data && (
        <CardContainer>
          {filteredRestaurants?.length === 0 && (
            <Msg> {"Não encontramos :("} </Msg>
          )}
          {getData}
        </CardContainer>
      )}
      {order?.order && <PopUpOrder order={order} />}
      <Space/>
      <Footer page={"home"} />
    </div>
  );
}
