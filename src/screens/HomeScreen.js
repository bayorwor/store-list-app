import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Spinner, Alert, Image } from "react-bootstrap";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { useProduct } from "../hooks/useProducts";
// import Paginate from "../components/Paginate";

const HomeScreen = () => {
  const { loading, error, products } = useProduct("/api/v1/products");

  if (loading) return <Spinner size="lg" />;
  return (
    <>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>IMAGE_LINK</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>LINK</th>
            <th>AVAILABILITY</th>
            <th>PRICE</th>
            <th>BRAND</th>
            <th>GTIN</th>
            <th>MPN</th>
            <th>CONDITION</th>
            <th>SHIPPING</th>
            <th>IDENTIFIER_EXISTS</th>
            <th>GOOGLE_PRODUCT_CATEGORY</th>
            <th>GENDER</th>
            <th>COLOR</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {error && <Alert>OOPS!! something went wrong</Alert>}
          {products.products.map((product) => (
            <tr key={product._id}>
              <td>
                <Image
                  src={product.image_link}
                  alt={product.product_title}
                  fluid
                />
              </td>
              <td>{product._id}</td>
              <td>{product.product_title}</td>
              <td>{product.description}</td>
              <td>{product.link}</td>
              <td>{product.availability}</td>
              <td>GH₵{product.price}.00</td>
              <td>{product.brand}</td>
              <td>{product.gtin}</td>
              <td>{product.mpn}</td>
              <td>{product.condition}</td>
              <td>{product.shipping}</td>
              <td>{product.identifier_exists}</td>
              <td>{product.google_product_category}</td>
              <td>{product.gender}</td>
              <td>{product.color}</td>
              <td>
                <Button variant="light" className="btn-sm">
                  <FaEdit />
                </Button>
                <Button variant="danger" className="btn-sm">
                  <FaTrash />
                </Button>
                <LinkContainer to={`/details/${product._id}`}>
                  <Button className="btn-sm">
                    <FaEye />
                  </Button>
                </LinkContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <Paginate pages={pages} page={page} /> */}
    </>
  );
};

export default HomeScreen;
