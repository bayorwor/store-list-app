import React from "react";
import {
  Row,
  Alert,
  Spinner,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { useProduct } from "../hooks/useProducts";

const DetailsScreen = ({ match }) => {
  const _id = match.params._id;
  const {
    loading,
    error,
    products: product,
  } = useProduct(`/api/v1/products/${_id}`);

  if (loading) return <Spinner size="lg" />;
  if (error) return <Alert>OOPS!! something went wrong</Alert>;
  return (
    <>
      <Row>
        <Col md={6} className="border">
          <Image src={product.image_link} alt={product.product_title} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.product_title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price :<span className="text-danger">GH₵{product.price}.00</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="font-weight-bold">Description : </span>
              {product.description}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="font-weight-bold">Gender : </span>
              {product.gender}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="font-weight-bold">Color : </span>
              {product.color}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price :</Col>
                  <Col>
                    <span className="text-danger font-weight-bold">
                      <strong>GH₵{product.price}.00</strong>
                    </span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status :</Col>
                  <Col>{product.availability}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.availability === "in-stock"}
                >
                  ADD TO CART
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DetailsScreen;
