import "./Rotorboard.css"
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card, Stack } from "react-bootstrap";
import { useState } from "react";
import { Rotors } from "./Rotors";




// import Modal from 'react-bootstrap/Modal';
interface Props {
    // leftPosition: number,
    // middlePosition: number,
    // rightPosition: number
}

const Rotorboard: React.FC<Props> = () => {
    // const letters: RegExp = /^[a-zA-Z]$/
    const alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    // console.log(Rotors)
    const {
        rotorI,
        rotorII,
        rotorIII,
        rotorIV,
        rotorV,
        reflector,
        reverseI,
        reverseII,
        reverseIII,
        reverseIV, 
        reverseV
    } = Rotors

    const [currentRightRotor, setCurrentRightRotor] = useState()
    const [currentMiddleRotor, setCurrentMiddleRotor] = useState()
    const [currentLeftRotor, setCurrentLeftRotor] = useState()

    const [rightPosition, setRightPosition] = useState<number>(0)
	const [middlePosition, setMiddlePosition] = useState<number>(0)
	const [leftPosition, setLeftPosition] = useState<number>(0)

    // const [inputLetter, setInputLetter] = useState('')
    const [message, setMessage] = useState('')//input message from user
    const [encryptedMessage, setEncryptedMessage] = useState<string>('')//encrypted message
    // const [isKeyPressed, setIsKeyPressed] = useState(false);

    const changeRotor = (value: string, id:string)=>{
        // console.log(value, id)
    }

    const clockRotation = () => {//this runs only once regardless of key being continuosly being pressed

		// if (!e.repeat) {
			// console.log(e.key.toUpperCase())
			setRightPosition(rightPosition + 1)
			if (rightPosition >= 25) {
				setRightPosition(0)
				setMiddlePosition(middlePosition + 1)
			}
			if (rightPosition < 0) {
				setRightPosition(25)
			}

			if (middlePosition >= 25) {
				setMiddlePosition(0)
				setLeftPosition(leftPosition + 1)
			}

			if (leftPosition >= 25) {
				setLeftPosition(0)
			}

		// }
	}

    const handleKeyDown = (event:any) => {
        const letter = event.key.toUpperCase()
        // console.log(letter)
        // if key is not held down and the key pressed is a letter 
        // almost everything should happen inside this is statement
        if(!event.repeat && alphabet.includes(letter)){
            clockRotation()
            setMessage(message+letter)
            const inputIndex = alphabet.indexOf(letter)//index of letter pressed

            const rightRotorOutput = rotorI[inputIndex]

            const middleRotorOutput = rotorII[rightRotorOutput]

            const leftRotorOutput = rotorIII[middleRotorOutput]

            const reflectorOutput = reflector[leftRotorOutput]

            const reverseLeftRotorOutput = reverseIII[reflectorOutput]

            const reverseMiddleRotorOutput = reverseII[reverseLeftRotorOutput]

            const reverseRightRotorOutput = reverseI[reverseMiddleRotorOutput]

            setEncryptedMessage(encryptedMessage+alphabet[reverseRightRotorOutput])
            // console.log(leftPosition, middlePosition, rightPosition)
        }
        // if (event.key === 'Enter') {
        //     console.log('Enter key pressed');
        // }
        // console.log(event)
        // if (!isKeyPressed) {
        //     console.log("once");
        
        //     setIsKeyPressed(true);
        //     if(!alphabet.includes(event.key.toUpperCase())){//if key is not a capital letter, do nothing
        //         console.log("poop")
        //         return
        //     }else{//else add letter to message
        //         setMessage(message+event.key.toString())
                
        //     }

            
        //     // Start your continuous action or handle the key press event
        // }
    };

    // const handleKeyUp = (event:any) => {
    //     // if (event.key === 'Enter') {
    //     //     console.log('Enter key released');
    //     // }
    //     // console.log("key released!!",isKeyPressed);
        

    //     if (isKeyPressed) {
    //         setIsKeyPressed(false);
    //         // Stop your continuous action or handle the key release event
    //     }
    // };

    const checkValidKey = (event:any) => {
        console.log(event)
        // if(isKeyPressed){

        // }
        // if(e.key.match(letters)){
        //     console.log("mathch!!");
        // }else{
        //     console.log("no match :(");

        // }
        // console.log(e)
        // const currentMessage = e.target.value.toUpperCase()

        // console.log(currentMessage[currentMessage.length-1])
        // setMessage(currentMessage)
        // let randomIndex = Math.floor(Math.random() * alphabet.length)
        // setEncryptedMessage(encryptedMessage+alphabet[randomIndex])
    }

    return (
        <Container fluid className="rotor-container ">

            <Card className="my-2">
                <Card.Body>
                    <div>Your Message</div>
                    <div>
                        <textarea
                            className="message"
                            value={message}
                            // onKeyDown={(e) => checkValidKey(e)}
                            placeholder="Enter your message here"
                            onChange={()=>{}}
                            onKeyDown={(e) => {handleKeyDown(e)}}
                            // onKeyUp={handleKeyUp}
                        />
                    </div>
                </Card.Body>
            </Card>
            <Stack className="rotor-settings my-2" direction="horizontal" gap={2}>
                <Card className="mx-auto">
                    <Card.Body className="py-2">
                        <Form.Select 
                            id="leftRotor"
                            onChange={(e) =>changeRotor(e.target.value, e.target.id)}>
                                <option>I</option>
                                <option>II</option>
                                <option>III</option>
                                <option>IV</option>
                                <option>V</option>
                        </Form.Select>
                        <Button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg></Button>
                        <div>{leftPosition + 1}</div>
                        <Button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg></Button>
                    </Card.Body>
                </Card>
                <Card className="mx-auto ">
                    <Card.Body className="py-2">
                        <Form.Select
                            id="middleRotor"
                            onChange={(e) =>changeRotor(e.target.value, e.target.id)}>
                            <option>I</option>
                            <option>II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                        </Form.Select>
                        <Button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg></Button>
                        <div>{middlePosition + 1}</div>
                        <Button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg></Button>
                    </Card.Body>
                </Card>
                <Card className="mx-auto ">
                    <Card.Body className="py-2">
                        <Form.Select
                            id="rightRotor"
                            onChange={(e) =>changeRotor(e.target.value, e.target.id)}>
                            <option>I</option>
                            <option>II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                        </Form.Select>
                        <Button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg></Button>
                        <div>{rightPosition + 1}</div>
                        <Button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg></Button>
                    </Card.Body>
                </Card>
            </Stack>

            <Card className="  my-2">
                <Card.Body>
                    <div>Your Encrypted Message</div>
                    <textarea
                        readOnly
                        className="encrypted-message"
                        value={encryptedMessage} placeholder="Your encrypted message"
                    />
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Rotorboard