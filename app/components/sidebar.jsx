import Link from 'next/link';
import React,{useEffect,useState} from 'react'
import { FaShoppingBag } from 'react-icons/fa';



function SideBar({direction, column, gap}) {
  useEffect(() => {
    const apiUrl = "https://dummyjson.com/products/category-list";
    // You can include headers, request method, and other options as needed
    const requestOptions = {
      method: "GET", // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(apiUrl, requestOptions)
      .then((response) => {
        // Check if the request was successful (status code 2xx)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response JSON
        return response.json();
      })
      .then((data) => {
        // Do something with the data received from the API
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Fetch error:", error);
      });
  }, []);
  const [categories, setCategories] = useState([]);


    return <div className={`overflow-y-scroll flex-${direction} flex h-full pl-2`}>
      {categories.map((category, index) => {
        return (
          
          <Link
            key={index}
            className={`text-slate-500 py-1 my-3 w-fit flex-${column} gap-${gap} flex gap-3 items-center  px-2 hover:bg-green-400`}
            href={`/pages/${category}`}

          >
            <FaShoppingBag size={20} />
            <p className="text-xs  w-fit px-2 py-1">
              {category}
            </p>
          </Link>
        );
      })}
    </div>;
  }

  export default SideBar;