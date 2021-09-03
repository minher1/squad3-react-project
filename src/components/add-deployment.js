
import React, { useState } from 'react';
import { Col, Form, ListGroup, Row, Button, Card } from 'react-bootstrap';

function AddDeployment({ deploymentsCount }) {
    const [deploymentDateObject, setDeploymentDateObject] = useState([]);
    const [newDeploymentDateObject, setNewDeploymentDateObject] = useState({ datePart: "", timePart: "" });
    deploymentsCount(deploymentDateObject.length);

    const frequency = (deployments) => {
        if (deployments.length === 0 || deployments.length === 1) {
            return deploymentDateObject.length;
        }
        if (weeksBetween(deployments[0], deployments[deployments.length - 1]) === 1) {
            return deployments.length;
        }

        const result = deploymentDateObject.length / weeksBetween(deployments[0], deployments[deployments.length - 1]);
        if (Number.isInteger(result)) {
            return result;
        } else {
            return result.toFixed(1);
        }
    };

    function sortDeployments(array) {
        return array.sort((a, b) => a - b)
    }

    function weeksBetween(d1, d2) {
        return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000)) + 1;
    }

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
            <p className="mt-2">Frequency: <strong>{frequency(sortDeployments(deploymentDateObject))}/week</strong></p>
            <ListGroup className="mt-2">
                {sortDeployments(deploymentDateObject).map((dx, index) => (
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