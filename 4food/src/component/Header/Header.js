import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export default function Header({ title }) {
  return (
    <div>
      <h2>{title} </h2>
      <MdOutlineArrowBackIosNew />
    </div>
  );
}
