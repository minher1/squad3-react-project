
import React, { useState } from 'react';
import { Col, Form, ListGroup, Row, Button, Card } from 'react-bootstrap';

function LeadTime() {


    const [leadTime, setLeadTime] = useState(" ");
    const [newLeadTime, setNewLeadTime] = useState("");


const handleSubmit = (e) => {
    e.preventDefault();
    setLeadTime(newLeadTime);
    setNewLeadTime("");
}

    const plural = (leadTime== " " )?"":(leadTime === "1" ) ? " minute" : " minutes";
    
   

   return (
        <Card body className="mt-5 bg-light">

            <h1 className="diplay-4">Lead Time</h1>
            <p className="mt-2">From code pushed to code deployed: <strong>{leadTime} {plural}</strong></p>

            <Form onSubmit={handleSubmit} className="mt-3">
                <Row className="mb-3">
                    <Col>
                        <Form.Group>
                            <Form.Label id="leadTime" htmlFor="leadTime">Change Lead Time (in minutes) </Form.Label>
                            <Form.Control
                                type="number"
                                name="leadTime"
                                min="1"
                                placeholder="leadTime"
                                aria-label="leadTime"
                                aria-labelledby="leadTime"
                                value={newLeadTime}
                                style={{ width: "300px" }}
                                onChange={(e) => setNewLeadTime(e.target.value )}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit">Update Lead Time</Button>
                    </Col>
                </Row>
            </Form>

        </Card>


    )


};

export default LeadTime;