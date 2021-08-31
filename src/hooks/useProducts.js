import { useState, useEffect } from "react";
export function useProduct(url) {
  const [products, setProducts] = useState();
  const [error, setErr] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url)
        .then((res) => res.json())
        .catch((err) => setErr(err));
      setProducts(data);
      setLoading(false);
    };
    fetchData();
    console.log(products);
  }, [url]);
  return {
    products,
    loading,
    error,
  };
}
