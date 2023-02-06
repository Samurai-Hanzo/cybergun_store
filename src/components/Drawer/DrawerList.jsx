import React from "react";
import Drawer from "./Drawer";

export default function DrawerList() {
  let cartArr = JSON.parse(localStorage.getItem("product"));
  console.log(cartArr, 99);
  return (
    <div>
      {cartArr.map((item) => (
        <Drawer key={item.id} item={item} />
      ))}
    </div>
  );
}
