import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CardSectionComponent = () => {
  return (
 <Container>
      <Row className="gy-4">
        {[1, 2, 3, 4].map((num) => (
          <Col md={3} key={num}>
            <Card>
              <Card.Body>
             <Card.Img variant="top" src="holder.js/500px325" />
                <Card.Title>Card Title {num}</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">Find Out More!</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default CardSectionComponent;
