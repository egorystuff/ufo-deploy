import { useEffect, useState } from "react";
import { mockProducts } from "./mockProducts";

export const usePaddleProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Пока мок-данные
        setProducts(mockProducts);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch Paddle products:", err);
        setError("Failed to load subscription plans");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
