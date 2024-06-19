import React,{useContext} from 'react'
import CartContext from "../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import { FiShoppingCart } from 'react-icons/fi';



function AddToCart({product}) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {<button
    onClick={handleAddToCart}
    className="text-xs bg-green-400 flex items-center px-2 py-1 rounded-full text-white"
  >
    Add to Cart
  </button>
    addToCart(product);
    toast.success(`Added ${product.title} to cart`, {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    console.log(product);
  };
    
  return (
    <div>
       <button
          onClick={handleAddToCart}
        >
          <FiShoppingCart size={25} className="text-slate-500" />
        </button>
      <ToastContainer />

    </div>
  )
}

export default AddToCart
