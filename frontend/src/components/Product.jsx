import { Card } from "react-bootstrap";


const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded shadow-sm">
      <Card.Body>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Product;