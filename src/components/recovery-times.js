import { Form, Table, Button, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import Moment from 'moment';

function RecoveryTimes({ recoveryCount }) {

    Moment.locale('en');

    const [recoveryTimes, setRecoveryTimes] = useState([]);
    
    const [newRecoveryTime, setNewRecoveryTime] = useState({ startDate: "", startTime: "", duration: "" });
    
    recoveryCount(recoveryTimes.length);

    const onSubmit = (e) => {
        e.preventDefault();
        setRecoveryTimes((recoveryTimes) => [...recoveryTimes, newRecoveryTime]);
        console.log(recoveryCount);
        setNewRecoveryTime({ startDate: "", startTime: "", duration: "" });
    };
    
    const calculateMTTR = (array ) => {
        let total = 0 ;
        array.map((time , i) => (
            total = total + parseInt(time.duration)
        ));
        if  (array.length === 0) { 
            return 0; 
        } else {
            const result =  total/array.length;
            if (Number.isInteger(result)) {
                return result;
            } else {
                return result.toFixed(1);
            }
        }
        
    }
    const plural = (calculateMTTR(recoveryTimes) === "1.0" || calculateMTTR(recoveryTimes) === 0 ) ? "" : "s";


    return (
        <Card body className="mt-5 bg-light">
            <h1 className="diplay-4">Recovery Times</h1>
            <h3> MTTR : <strong>{calculateMTTR(recoveryTimes)} Minute{plural} </strong></h3>
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