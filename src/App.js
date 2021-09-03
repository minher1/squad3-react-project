import './App.css';
import RecoveryTimes from "./components/recovery-times.js";
import AddDeployement from './components/add-deployment';
import LeadTime from './components/lead-time';
import { Col, Container, Row, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import FailRate from './components/fail-rate';

function App() {

  const [deploymentsCount, setDeploymentsCount] = useState(0);
  const [recoveryCount, setRecoveryCount] = useState(0);

  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Squad 3 is awesome!</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <AddDeployement deploymentsCount={setDeploymentsCount} />
          </Col>
          <Col>
            <RecoveryTimes recoveryCount={setRecoveryCount} />
          </Col>
        </Row>
        <Row>
          <Col>
            <LeadTime />
          </Col>
          <Col>
            <FailRate deploymentsCount={deploymentsCount} recoveryCount={recoveryCount} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
