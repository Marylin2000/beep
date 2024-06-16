// utils/api.js

export const fetchProductById = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const product = await response.json();
      return product;
    } catch (error) {
      console.error("Failed to fetch product:", error);
      return null;
    }
  };
  