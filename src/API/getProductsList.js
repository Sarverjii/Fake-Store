// src/API/getProductsList.js

export default async function getProductsList(limit) {
    try {
      const response = await fetch(`https://fakestoreapi.in/api/products?limit=${limit}`);
      const json = await response.json();
      return json.products;

    } catch (error) {
      console.error("Error fetching product list:", error);
      return [];
    }
  }
  