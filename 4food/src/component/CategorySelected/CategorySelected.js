import React from "react";
import { Category } from "./styled";

export default function CategorySelected({ category, select, setSelect }) {
  const onClickCategory = () => {
    setSelect(category.category);
  };
  return (
    <div>
      <Category
        key={category.id}
        onClick={onClickCategory}
        select={select === category.category}
      >
        {category.category}
      </Category>
    </div>
  );
}
