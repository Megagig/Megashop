import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Copyright 2021 &copy; Megashop</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
