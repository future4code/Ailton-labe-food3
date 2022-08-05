import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { goToPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CardContainer, CardInfo, Space, Title } from "./styled";

export default function CardHome({ item }) {
  const navigate = useNavigate();
  return (
    <CardContainer
      sx={{ maxWidth: "20.5rem", mb: "0.5rem" }}
      onClick={() => goToPage(navigate, `/restaurant/${item.id}/${item.name}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="120px"
          width="328px"
          image={item.logoUrl}
          alt={item.name}
        />
        <Space/>
        <Title>{item.name}</Title>
        <CardInfo>
          <Typography variant="body2" color="text.secondary">
            {item.deliveryTime - 10} - {item.deliveryTime} min
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Frete R${item.shipping.toFixed(2)}

          </Typography>
        </CardInfo>
      </CardActionArea>
    </CardContainer>
  );
}
