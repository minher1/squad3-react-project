import { Form, Table, Button, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import Moment from 'moment';

function RecoveryTimes() {

    Moment.locale('en');


    const [recoveryTimes, setRecoveryTimes] = useState([]);

    const [newRecoveryTime, setNewRecoveryTime] = useState({ startDate: "", startTime: "", duration: "" });

    const onSubmit = (e) => {
        e.preventDefault();
        setRecoveryTimes((recoveryTimes) => [...recoveryTimes, newRecoveryTime]);
        setNewRecoveryTime({ startDate: "", startTime: "", duration: "" });
    };

    return (
        <Card body className="mt-5 bg-light">
            <h1 className="diplay-4">Recovery Times</h1>
            <Table striped bordered hover className="mt-5">
                <thead>
                    <tr>
                        <th>Start Time</th>
                        <th>Duration (minutes)</th>
                    </tr>
                </thead>
                <tbody>
                    {recoveryTimes.map((recoveryTime, i) => (
                        <tr key={i}>
                            <td>{Moment(recoveryTime.startDate + " " +recoveryTime.startTime).format("L LTS")}</td>
                            <td>{recoveryTime.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Form onSubmit={onSubmit}>
                <Row className="mb-3">
                    <Col>
                        <Form.Group>
                            <Form.Label id="startDate" htmlFor="startDate">Start Date</Form.Label>
                            <Form.Control
                                name="startDate"
                                type="date"
                                aria-labelledby="startDate"
                                placeholder="startDate"
                                aria-label="startDate"
                                value={newRecoveryTime.startDate}
                                onChange={(e) => setNewRecoveryTime({ ...newRecoveryTime, startDate: e.target.value })}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label id="startTime" htmlFor="startTime">Start Time</Form.Label>
                            <Form.Control
                                name="startTime"
                                type="time"
                                step="1"
                                aria-labelledby="startTime"
                                placeholder="startTime"
                                aria-label="startTime"
                                value={newRecoveryTime.startTime}
                                onChange={(e) => setNewRecoveryTime({ ...newRecoveryTime, startTime: e.target.value })}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label id="duration" htmlFor="duration">Duration</Form.Label>
                        <Form.Control
                            name="duration"
                            type="number"
                            min="0"
                            step="1"
                            aria-labelledby="duration"
                            placeholder="duration"
                            aria-label="duration"
                            value={newRecoveryTime.duration}
                            onChange={(e) => setNewRecoveryTime({ ...newRecoveryTime, duration: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit">Add Recovery Time</Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
}

export default RecoveryTimes;