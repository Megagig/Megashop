//This Screen shows the product details. This is the product details Page
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import the Link component bc we are going to use it to navigate to the product details page
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'; // Import the Row, Col, Image, ListGroup, Card, and Button components from react-bootstrap
import products from '../products';
import Rating from '../components/Rating'; // Import the Rating component
const ProductScreen = () => {
  const { id: productId } = useParams(); // Get the id from the URL
  const product = products.find((product) => product._id === productId); // Find the product by id

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {product && (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
