import "./Rotors.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



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
                    <Col className="position">
                        <Button className="position-button" variant="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                        </Button>
                        {leftPosition}
                        <Button className="position-button" variant="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </Button>
                    </Col>
                    <Col className="position">
                        <Button className="position-button" variant="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                        </Button>
                        {middlePosition}
                        <Button className="position-button" variant="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </Button>
                    </Col>
                    <Col className="position">
                        <Button className="position-button" variant="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                        </Button>
                        {rightPosition}
                        <Button className="position-button" variant="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Rotors