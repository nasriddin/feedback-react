import React, { useState } from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ item, handleDelelte }) {
//   const handleDelelte = (id) => {
//     console.log(id);
//   };
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelelte(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
