import "./Rotors.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';


const Rotors = () => {


    return (
        <Container fluid className="rotor-container">
            <Modal.Dialog className="positions">


                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>


            </Modal.Dialog>
        </Container>
    )
}

export default Rotors