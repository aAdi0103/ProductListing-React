import { useContext } from "react";
import { productContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(productContext);

  // Extract unique categories from products
  const categories = Array.from(new Set(products.map(product => product.category)));

  function getRandomRGBA() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(2);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

  return (
    <div className="w-[20vw] h-screen bg-blue-200 rounded-md p-2">
      <button className="mb-3 mt-3 p-2 border bg-slate-200 ml-9 rounded-md">
        Add new Products
      </button>
      <hr />
      <h1 className="mt-3 font-bold ml-3">Category Filter</h1>
      <ul className="mt-2 ml-3">
        {categories.map((category, index) => (
          <Link to={`/?categories=${category}`}>          
               <div className="flex ">
               <div className="flex items-center justify-center gap-2">
                <div style={{backgroundColor:getRandomRGBA()}} className="w-[1vw] h-[1vw] rounded-full"></div>
               <h1>{category}</h1> 
                </div>   </div>      
          </Link>          
         
        ))}
      </ul>
    </div>
  );
};

export default Nav;
