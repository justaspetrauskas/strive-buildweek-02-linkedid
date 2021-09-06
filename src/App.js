import "./App.css";
import Sideprofile from './components/Sideprofile'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
      <Container>
        <Row>
          <Sideprofile />
        </Row>
      </Container>
    </>
  );
}

export default App;
