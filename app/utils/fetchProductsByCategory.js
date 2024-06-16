// utils/fetchProductsByCategory.js

export const fetchProductsByCategory = async (category) => {
    const apiUrl = `https://dummyjson.com/products/category/${category}`;
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    try {
      const response = await fetch(apiUrl, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data.products;
    } catch (error) {
      console.error("Fetch error:", error);
      return [];
    }
  };
  