import { useEffect, useState } from "react";

import SingleCart from "./SingleCart";

import { useDispatch, useSelector } from "react-redux";
import { addAllDeserts } from "../features/dessertSlice";
import { data } from "autoprefixer";
function ProductsList() {
  const dispatch = useDispatch();
  const { allDeserts } = useSelector((state) => state.orders);

  useEffect(() => {
    fetch(
      "https://online-json-server-api.up.railway.app/project/66a0f0601d2cd3eb1144364c/dessert"
    )
      .then((data) => data.json())
      .then((desserts) => dispatch(addAllDeserts(desserts.data)));
  }, []);

  return (
    <div className="w-4xl">
      <h1 className="text-[44px] mb-8 font-[700]">Desserts</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-[25px]">
        {allDeserts &&
          allDeserts.map((dessert) => {
            return <SingleCart dessert={dessert} key={dessert.id} />;
          })}
      </div>
    </div>
  );
}

export default ProductsList;
