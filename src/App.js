import './App.css';
import StudentMark from './StudentMark'
import StudentsTable from './StudentsTable';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'
import Alert from 'react-bootstrap/Alert'
import {Container, Row,Col, Image} from 'react-bootstrap'

// Component Application
function App() {
  const students = ['Oleg',"Serhii","Maxim","Valeriya","Liza"];

  return (
    <div class="main">
      <Button>Bootstrap button</Button>

      <Alert variant='success'>Alert text</Alert>
      <Carousel>
        <Carousel.Item>
          <p>Itme</p>

        </Carousel.Item>
      </Carousel>
      <StudentsTable students={students}/>
      {students.map(student=><StudentMark name={student} group="Fit 2-14"/>)}
      <div className='container'>
        <div className='row'>

        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <Image width={320} src="https://cdn.thewirecutter.com/wp-content/media/2024/05/ipad-2048px-2555.jpg" roundedCircle></Image>
          </Col>
          <Col>
            <Image width={320} src="https://cdn.thewirecutter.com/wp-content/media/2024/05/ipad-2048px-2555.jpg" roundedCircle></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
