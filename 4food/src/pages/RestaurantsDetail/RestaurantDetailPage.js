import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../../component/DetailCard/DetailCard";
import { useProtectPage } from "../../hooks/useProtectPage";
import { requestData } from "../../services/requestAPI";
import { Container } from "../../global/GeneralStyled";
import Header from "../../component/Header/Header";
import {
  CardContainer,
  CardInfo,
  Title,
} from "../../component/CardHome/styled";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function RestaurantDetailPage() {
  useProtectPage();
  const [data, setData] = useState("");
  const params = useParams();
  useEffect(() => {
    const token = localStorage.getItem("token");
    requestData("get", `restaurants/${params.id}`, "", token, setData);
  }, [params]);

  let array = [];
  let arrayCard = [];

  if (data) {
    //1.separar categorias e impedir repetição
    for (const products of data.restaurant.products) {
      //2.verifica se o produto ja existe no array
      if (!array.includes(products.category)) {
        const cate = data.restaurant.products?.map((item) => {
          if (item.category === products.category) {
            return <DetailCard key={item.id} product={item} />;
          }
        });
        //2.verifica se o produto ja existe no array
        array.push(products.category);
        //3.criação do card que filtra por categoria
        arrayCard.push(
          <div>
            <h1>{products.category}</h1>
            {cate}
          </div>
        );
        //3.criação do card que filtra por categoria
      }
    }
    //1.separar categorias e impedir repetição
  }
  return (
    <Container>
      <Header title="Restaurante" />
      <CardContainer sx={{ boxShadow: 0, maxWidth: "20.5rem", mb: "0.5rem" }}>
        {data && (
          <CardActionArea>
            <CardMedia
              component="img"
              height="120px"
              width="328px"
              image={data.restaurant.logoUrl}
              alt={data.restaurant.name}
            />
            <Title>{data.restaurant.name}</Title>
            <Typography
              sx={{ ml: "1rem" }}
              variant="body2"
              color="text.secondary"
            >
              {data.restaurant.category}
            </Typography>
            <CardInfo>
              <Typography variant="body2" color="text.secondary">
                {data.restaurant.deliveryTime - 10} -{" "}
                {data.restaurant.deliveryTime} min
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Frete R${data.restaurant.shipping.toFixed(2)}
              </Typography>
            </CardInfo>
            <Typography m="0 1rem" variant="body2" color="text.secondary">
              {data.restaurant.address}
            </Typography>
          </CardActionArea>
        )}
      </CardContainer>
      {/* passo 4. imprimir categorias e cards contidos nela */}
      <div>{arrayCard}</div>
    </Container>
  );
}
