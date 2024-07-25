import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";
import { useEffect } from "react";



function App() {
  useEffect(() => {
    fetch(
      "https://online-json-server-api.up.railway.app/project/66a0f0601d2cd3eb1144364c/dessert"
    )
      .then((data) => data.json())
      .then((desserts) => dispatch(addAllDeserts(desserts.data)));
  }, []);
  
  return (
    <div className="grid lg:grid-cols-3 gap-8 w-full max-w-[1300px] mx-auto py-[40px] ">
      <div className="col-span-2">
        <ProductsList />
      </div>
      <div className="col-span-1">
        <Cart />
      </div>
    </div>
  );
}

export default App;
