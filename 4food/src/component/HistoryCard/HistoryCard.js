import React from "react";
import { monthList } from "../../constants/month";
import {
  CategoryHistory,
  DescriptionDate,
  PriceHistory,
  RectangleHistory,
  InfoHistory,
} from "./styled";

export default function HistoryCard({ history }) {
  const convertDate = (timestamp) => {
    let time = new Date(timestamp);
    let day = time.getDate().toString().padStart(2, "0");
    let month = (time.getMonth() + 1).toString().padStart(2, "0");
    let year = time.getFullYear();
    const monthWord = monthList[Number(month - 1)];
    return `${day} ${
      monthWord[0].toUpperCase() + monthWord.substring(1)
    } ${year}`;
  };
  return (
    <div>
      <RectangleHistory>
        <InfoHistory>
          <CategoryHistory>{history.restaurantName}</CategoryHistory>
          <DescriptionDate>{convertDate(history.createdAt)}</DescriptionDate>
          <PriceHistory>
            SUBTOTAL R${history?.totalPrice.toFixed(2)}
          </PriceHistory>
        </InfoHistory>
      </RectangleHistory>
    </div>
  );
}
