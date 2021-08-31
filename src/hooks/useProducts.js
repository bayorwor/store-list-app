import { useState, useEffect } from "react";
export function useProducts(keyword = "", pageNumber = "") {
  const [products, setProducts] = useState();
  const [pages, setPages] = useState();
  const [page, setPage] = useState();
  const [error, setErr] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://storelistapi.herokuapp.com/api/v1/products?keyword=${keyword}&pageNumber=${pageNumber}`
      )
        .then((res) => res.json())
        .catch((err) => setErr(err));
      console.log(data);
      setProducts(data.products);
      setPages(data.pages);
      setPage(data.page);
      setLoading(false);
    };
    fetchData();
  }, [keyword, pageNumber]);
  return {
    products,
    page,
    pages,
    loading,
    error,
  };
}
