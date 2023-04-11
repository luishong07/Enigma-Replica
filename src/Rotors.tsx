import "./Rotors.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


// import Modal from 'react-bootstrap/Modal';
interface Props {
    leftPosition: number,
    middlePosition: number,
    rightPosition: number
}

const Rotors: React.FC<Props> = ({ leftPosition, middlePosition, rightPosition }: Props) => {


    return (
        <Container fluid className="rotor-container">
            <Container className="positions">
                <Row className="position-row">
                    <Col className="position">
                        <Form.Select className="rotor-selector" >
                            <option value="1">I</option>
                            <option value="2">II</option>
                            <option value="3">III</option>
                        </Form.Select>
                    </Col>
                    <Col className="position">
                        <Form.Select className="rotor-selector" >
                            <option value="1">I</option>
                            <option value="2">II</option>
                            <option value="3">III</option>
                        </Form.Select>
                    </Col>
                    <Col className="position">
                        <Form.Select className="rotor-selector" >
                            <option value="1">I</option>
                            <option value="2">II</option>
                            <option value="3">III</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="position-row">
                    <Col className="position">{leftPosition}</Col>
                    <Col className="position">{middlePosition}</Col>
                    <Col className="position">{rightPosition}</Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Rotors