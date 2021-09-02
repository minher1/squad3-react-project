import './App.css';
import RecoveryTimes from "./components/recovery-times.js";
import AddDeployement from './components/add-deployment';
import { Col, Container, Row, Navbar } from 'react-bootstrap';

function App() {
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
            <AddDeployement />
          </Col>
          <Col>
            <RecoveryTimes />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
