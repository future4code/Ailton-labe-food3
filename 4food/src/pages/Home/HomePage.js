import React, { useEffect, useState } from "react";
import { useProtectPage } from "../../hooks/useProtectPage";
import Header from "../../component/Header/Header";
import { requestData } from "../../services/requestAPI";
import CardHome from "../../component/CardHome/CardHome";
import { CardContainer, InputSearch } from "./styled";
import InputAdornment from '@mui/material/InputAdornment';
import Search from "../../assets/img/search.png"
import TextField from '@mui/material/TextField';
import Footer from "../../component/Footer/Footer";

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
      <InputSearch>
        <TextField
          id="input-with-icon-textfield"
          variant="outlined"
          placeholder="Restaurantes"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
               <img src={Search} alt="lupinha"/>
              </InputAdornment>
            ),
          }}
        />
      </InputSearch>
      <CardContainer>
        {getData}
      </CardContainer>
      <Footer page={"home"}/>
    </div>
  );
}
