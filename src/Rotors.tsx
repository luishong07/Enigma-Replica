import "./Rotors.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card, Stack } from "react-bootstrap";



// import Modal from 'react-bootstrap/Modal';
interface Props {
    leftPosition: number,
    middlePosition: number,
    rightPosition: number
}

const Rotors: React.FC<Props> = ({ leftPosition, middlePosition, rightPosition }: Props) => {


    return (
        <Container fluid className="rotor-container h-25 ">

            <Card className="  my-2">
                <Card.Body>
                    <div>Hello there</div>
                </Card.Body>
            </Card>
            {/* <Card className="  my-2">
                <Card.Body>
                    <div>Hello there</div>
                </Card.Body>
            </Card> */}
            {/* <Card className=" py-auto "> */}
                <Stack className="rotor-settings my-2" direction="horizontal" gap={2}>
                    <Card className="mx-auto  ">
                        <Card.Body className="py-2">
                            <Form.Select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Select>
                            <Button>/\</Button>
                            <div>{leftPosition}</div>
                            <Button>\/</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mx-auto ">
                        <Card.Body className="py-2">
                                <Form.Select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Select>
                            <Button>/\</Button>
                            <div>{middlePosition}</div>
                            <Button>\/</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mx-auto ">
                        <Card.Body className="py-2">
                                <Form.Select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Select>
                            <Button>/\</Button>
                            <div>{rightPosition}</div>
                            <Button>\/</Button>
                        </Card.Body>
                    </Card>
                </Stack>
            {/* </Card> */}

            <Card className="  my-2">
                <Card.Body>
                    <div>Hello there</div>
                </Card.Body>
            </Card>
            {/* <Card className="bg-light w-25"></Card>
            <Container className="positions w-50">
                <Row className="position-row">
                    <Col className="position">
                        <Form.Select className="rotor-selector mt-3 w-50 mx-auto" >
                            <option value="1">I</option>
                            <option value="2">II</option>
                            <option value="3">III</option>
                        </Form.Select>
                    </Col>
                    <Col className="position">
                        <Form.Select className="rotor-selector mt-3 w-50 mx-auto" >
                            <option value="1">I</option>
                            <option value="2">II</option>
                            <option value="3">III</option>
                        </Form.Select>
                    </Col>
                    <Col className="position">
                        <Form.Select className="rotor-selector mt-3 w-50 mx-auto" >
                            <option value="1">I</option>
                            <option value="2">II</option>
                            <option value="3">III</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className="position-row">
                    <Col className="position">
                        <Button className="position-button up" variant="secondary">
                        </Button>
                        {leftPosition}
                        <Button className="position-button down" variant="secondary">
                        </Button>
                    </Col>
                    <Col className="position">
                        <Button className="position-button up" variant="secondary">
                        </Button>
                        {middlePosition}
                        <Button className="position-button down" variant="secondary">
                        </Button>
                    </Col>
                    <Col className="position">
                        <Button className="position-button up" variant="secondary">
                        </Button>
                        {rightPosition}
                        <Button className="position-button down" variant="secondary">
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Card className="bg-light w-25"></Card> */}
        </Container>
    )
}

export default Rotors