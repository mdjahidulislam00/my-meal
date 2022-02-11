import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';

const NoMatch = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Alert variant='danger'>
                        <h3>This Page Not Found 404 error---!</h3>
                    </Alert>
                </Col>
            </Row>
        </Container>
    );
};

export default NoMatch;