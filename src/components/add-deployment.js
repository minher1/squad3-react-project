
import React, { useState } from 'react';
import { Col, Form, ListGroup, Row, Button, Card } from 'react-bootstrap';

function AddDeployment() {
    const [deploymentDateObject, setDeploymentDateObject] = useState([]);
    const [newDeploymentDateObject, setNewDeploymentDateObject] = useState({ datePart: "", timePart: "" });

    function formatDate(date, time) {
        const utcSeconds = new Date(...`${date} ${time}`.split(/[- :]/)).getTime() / 1000;
        const d = new Date(0);
        d.setUTCSeconds(utcSeconds);
        d.setMonth(d.getMonth() - 1);
        return d;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDeploymentDateObject((deploymentDateObject) => [...deploymentDateObject, formatDate(newDeploymentDateObject.datePart, newDeploymentDateObject.timePart)]);
        setNewDeploymentDateObject({ datePart: "", timePart: "" });
    };

    return (
        <Card body className="mt-5 bg-light">
            <h1 className="diplay-4">Deployments</h1>
            <ListGroup className="mt-5">
                {deploymentDateObject.sort((a, b) => a - b).map((dx, index) => (
                    <ListGroup.Item key={index}>{index + 1}. {dx.toLocaleDateString("en-US")}  {dx.toLocaleTimeString("en-US")}</ListGroup.Item>
                ))}
            </ListGroup>
            <Form onSubmit={handleSubmit} className="mt-3">
                <Row className="mb-3">
                    <Col>
                        <Form.Group>
                            <Form.Label id="deploymentDate" htmlFor="deploymentDate">Deployment Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="deploymentDate"
                                aria-labelledby="deploymentDate"
                                value={newDeploymentDateObject.datePart}
                                style={{ width: "300px" }}
                                onChange={(e) => setNewDeploymentDateObject({ ...newDeploymentDateObject, datePart: e.target.value })} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Label id="deploymentTime" htmlFor="deploymentTime">Deployment Time</Form.Label>
                        <Form.Control
                            type="time"
                            name="deploymentTime"
                            aria-labelledby="deploymentTime"
                            value={newDeploymentDateObject.timePart}
                            style={{ width: "300px" }}
                            onChange={(e) => setNewDeploymentDateObject({ ...newDeploymentDateObject, timePart: e.target.value })}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit">Add Deployment</Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}

export default AddDeployment;