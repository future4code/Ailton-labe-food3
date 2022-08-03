import React from "react";
import {
  CategoryHistory,
  DescriptionDate,
  PriceHistory,
  RectangleHistory,
  InfoHistory,
} from "./styled";

export default function HistoryCard() {
  return (
    <div>
      <RectangleHistory>
        <InfoHistory>
          <CategoryHistory>Burguer Vila Madalena</CategoryHistory>
          <DescriptionDate>23 outubro 2019</DescriptionDate>
          <PriceHistory>SUBTOTAL R$67,00</PriceHistory>
        </InfoHistory>
      </RectangleHistory>
    </div>
  );
}
