import { useSelector } from "react-redux";
import img from "../../public/noneCard.svg";

// react icons
import { MdOutlineCancel } from "react-icons/md";
function Cart({dessert}) {
  const { ordered, orderTotal, totalPrice } = useSelector(
    (state) => state.orders
  );
  console.log(ordered);

  return (
    <div >
      {ordered.length === 0 ? (
        <div className="bg-white p-[50px] rounded-[14px] flex items-center flex-col gap-[10px]">
          <h1 className="text-red-500 font-[700] text-[25px]">Your cart(0)</h1>
          <img src={img} alt="" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <div className="bg-white p-[50px] rounded-[14px] flex items-center flex-col gap-[10px] ">
          <h1 className="text-red-500 font-[700] text-[25px]">Your Cart({orderTotal})</h1>
        <div className="w-full">
        {ordered && ordered.map((item)=>{
          return <div className=" flex flex-col items-center w-full mb-5 border-b pb-1 ">
           <h1 className="">{item.name}</h1>
           <div className="flex justify-between items-center gap-10">
             <span>{item.amount}x</span>
            <img className="w-[50px] rounded-sm"
            src={item.image.thumbnail} />
            <span className="text-red-700">${item.price*item.amount}.00</span>
            <MdOutlineCancel />
           </div>
          </div>
         })}
        </div>
        </div>
        </>
      )}
    </div>
  );
}

export default Cart;
