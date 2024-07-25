import { useEffect, useState } from "react";
import Minus from "../../public/assets/images/icon-decrement-quantity.svg";
import Plus from "../../public/assets/images/icon-increment-quantity.svg";

import { decrementOrder, incrementOrder } from "../features/dessertSlice";

import { useDispatch } from "react-redux";

// images
import addCart from "../../public/assets/images/icon-add-to-cart.svg";
function SingleCart({ dessert }) {
  const dispatch = useDispatch();
  const [addButtons, setAddButtons] = useState(false);

  useEffect(() => {
    if (dessert.amount == 0) {
      setAddButtons(false);
    }
  }, [dessert.amount]);

  return (
    <div className="flex items-start  flex-col ">
      <div className="relative mb-10">
        <img
          src={dessert.image.desktop}
          alt={dessert.name}
          className="max-w-[250px] h-[240px] rounded-[15px]"
        />
        {!addButtons && (
          <button
            className="absolute w-[55%] md:w-[70%] text-[15px] md:text-center flex items-center justify-center  gap-1 bg-white  rounded-full px-3 font-semibold text-titleColor py-[10px] -mb-5 bottom-0 left-1/2 transform -translate-x-1/2 border-y-orange-800 text-center border-spacing-10 "
            onClick={() => {
              setAddButtons(true);
              dispatch(incrementOrder(dessert.id));
            }}
          >
            {" "}
            <img src={addCart} />
            Add To Card
          </button>
        )}
        {addButtons && (
          <div className="absolute w-[55%] md:w-[70%] text-[15px] md:text-center flex items-center justify-between gap-1 bg-[#C73B0F] text-[#ffff]  rounded-full px-3 font-semibold text-titleColor py-[10px] -mb-5 bottom-0 left-1/2 transform -translate-x-1/2 border border-secondaryColor text-center">
            <button
              className="px-1 py-2 rounded-full    border"
              onClick={() => dispatch(decrementOrder(dessert.id))}
            >
              <img className="" src={Minus} alt="" />
            </button>
            <span>{dessert.amount}</span>
            <button
              onClick={() => dispatch(incrementOrder(dessert.id))}
              className="px-1 py-1 rounded-full    border"
            >
              <img src={Plus} alt="" />
            </button>
          </div>
        )}
      </div>
      <p className="text-[#87635A]">{dessert.category}</p>
      <h3 className="text-xl">{dessert.name}</h3>
      <p className="text-[#C73B0F] font-[600]">${dessert.price}</p>
    </div>
  );
}

export default SingleCart;
