import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { requestData } from "../../services/requestAPI";
import { useNavigate } from "react-router-dom";
import Edit from "../../assets/img/edit.png";
import HistoryCard from "../../component/HistoryCard/HistoryCard";
import {
  InfoUser,
  Address,
  History,
  Info,
  TitleAddress,
  InfoHistory,
  Img,
} from "./styled";
import { goToPage } from "../../routes/coordinator";
import { useProtectPage } from "../../hooks/useProtectPage";
import { LoaderContainer, Space } from "../../global/GeneralStyled";
import { CircularProgress } from "@mui/material";

export default function ProfilePage() {
  useProtectPage();
  const [data, setData] = useState();
  const [history, setHistory] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    requestData("get", "profile", "", token, setData);
    requestData("get", "orders/history", "", token, setHistory);
  }, []);
  return (
    <div>
      <Header title={"Meu perfil"} />
      {!data && (
        <LoaderContainer>
          <CircularProgress style={{ color: "red" }} />
        </LoaderContainer>
      )}
      {data && (
        <>
          <InfoUser>
            <div>
              <Info>{data.user.name}</Info>
              <Info>{data.user.email}</Info>
              <Info>{data.user.cpf}</Info>
            </div>
            <Img
              src={Edit}
              alt="edit"
              onClick={() => goToPage(navigate, "/edituser")}
            />
          </InfoUser>
          <Address>
            <div>
              <TitleAddress>Endereço cadastrado</TitleAddress>
              <Info>{data.user.address}</Info>
            </div>
            <Img
              src={Edit}
              alt="edit"
              onClick={() => goToPage(navigate, "/editaddress")}
            />
          </Address>
          <History>
            <InfoHistory>Histórico do pedidos</InfoHistory>
            {history &&
              history?.orders?.map((item, index) => {
                return <HistoryCard key={index} history={item} />;
              })}
            <Space />
          </History>
        </>
      )}
      <Footer page={"profile"} />
    </div>
  );
}
