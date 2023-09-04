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
    const { reflector }: any = Rotors

    const [currentRightRotor, setCurrentRightRotor] = useState<number[]>(Rotors.rotorI)
    const [currentMiddleRotor, setCurrentMiddleRotor] = useState<number[]>(Rotors.rotorII)
    const [currentLeftRotor, setCurrentLeftRotor] = useState<number[]>(Rotors.rotorIII)
    ///set same variables and functions as above for reverse rotors
    const [currentReverseRightRotor, setCurrentReverseRightRotor] = useState<number[]>(Rotors.reverseI)
    const [currentReverseMiddleRotor, setCurrentReverseMiddleRotor] = useState<number[]>(Rotors.reverseII)
    const [currentReverseLeftRotor, setCurrentReverseLeftRotor] = useState<number[]>(Rotors.reverseIII)

    // const [rightPosition, setRightPosition] = useState<number>(Math.floor(Math.random()*25))
    // const [middlePosition, setMiddlePosition] = useState<number>(Math.floor(Math.random()*25))
    // const [leftPosition, setLeftPosition] = useState<number>(Math.floor(Math.random()*25))
    const [rightPosition, setRightPosition] = useState<number>(1)
    const [middlePosition, setMiddlePosition] = useState<number>(10)
    const [leftPosition, setLeftPosition] = useState<number>(9)

    // const [inputLetter, setInputLetter] = useState('')
    const [message, setMessage] = useState('')//input message from user
    const [encryptedMessage, setEncryptedMessage] = useState<string>('')//encrypted message
    // const [isKeyPressed, setIsKeyPressed] = useState(false);

    const changeRotor = (value: string, id: string) => {
        const newRotorKey = `rotor${value}` as keyof typeof Rotors
        const newReverseRotorKey = `reverse${value}` as keyof typeof Rotors

        if (id === "leftRotorSelector") {
            setCurrentLeftRotor(Rotors[newRotorKey])
            setCurrentReverseLeftRotor(Rotors[newReverseRotorKey])
        }

        if (id === "middleRotorSelector") {
            setCurrentMiddleRotor(Rotors[newRotorKey])
            setCurrentReverseMiddleRotor(Rotors[newReverseRotorKey])
        }

        if (id === "rightRotorSelector") {
            setCurrentRightRotor(Rotors[newRotorKey])
            setCurrentReverseRightRotor(Rotors[newReverseRotorKey])
        }

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

    
    const checkOverflow = (number:number)=>{
        if(number > 25){
            return number - 26
        }
        if(number < 0){
            return number + 26
        }else{
            return number
        }
    }

    const handleKeyDown = (event: any) => {
        const letter = event.key.toUpperCase()
        // console.log(letter)
        // if key is not held down and the key pressed is a letter 
        // almost everything should happen inside this is statement
        if (!event.repeat && alphabet.includes(letter)) {
            clockRotation()
            setMessage(message + letter)
            const inputIndex = alphabet.indexOf(letter)//index of letter pressed

            const inputToRightOffset = rightPosition - 0// this is always zero since the input does not rotate: ;
            const rightRotorOutput = currentRightRotor[checkOverflow(inputIndex+inputToRightOffset)]
            // console.log(alphabet[rightRotorOutput])

            const rightToMiddleOffset = middlePosition - rightPosition
            const middleRotorOutput = currentMiddleRotor[checkOverflow(rightRotorOutput+rightToMiddleOffset)]
            // console.log(alphabet[middleRotorOutput])

            const middleToLeftOffset = leftPosition - middlePosition
            const leftRotorOutput = currentLeftRotor[checkOverflow(middleRotorOutput+middleToLeftOffset)]
            // console.log(alphabet[leftRotorOutput])

            const leftToReflectorOffset = 0 - leftPosition
            const reflectorToLeftOffset = leftPosition - 0
            const reflectorOutput = checkOverflow(reflector[checkOverflow(leftRotorOutput+leftToReflectorOffset)]+reflectorToLeftOffset)
            // console.log(alphabet[reflectorOutput])

            const leftToMiddleReverseOffset = middlePosition - leftPosition
            const leftRotorReverseOutput = checkOverflow(currentReverseLeftRotor[reflectorOutput]+leftToMiddleReverseOffset)
            // console.log(alphabet[leftRotorReverseOutput])

            const middleToRightReverseOffset = rightPosition - middlePosition
            const middleRotorReverseOutput = checkOverflow(currentReverseMiddleRotor[leftRotorReverseOutput]+middleToRightReverseOffset)
            // console.log(alphabet[middleRotorReverseOutput])

            const rightToOutputReverseOffset = 0 - rightPosition
            const rightRotorReverseOutput  = checkOverflow(currentReverseRightRotor[middleRotorReverseOutput]+rightToOutputReverseOffset)
            // console.log(alphabet[rightRotorReverseOutput])

            setEncryptedMessage(encryptedMessage + alphabet[rightRotorReverseOutput])
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

    const checkValidKey = (event: any) => {
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
                            onChange={() => { }}
                            onKeyDown={(e) => { handleKeyDown(e) }}
                        // onKeyUp={handleKeyUp}
                        />
                    </div>
                </Card.Body>
            </Card>
            <Stack className="rotor-settings my-2" direction="horizontal" gap={2}>
                <Card className="mx-auto">
                    <Card.Body className="py-2">
                        <Form.Select
                            defaultValue={'III'}
                            id="leftRotorSelector"
                            onChange={(e) => changeRotor(e.target.value, e.target.id)}>
                            <option>I</option>
                            <option>II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                        </Form.Select>
                        <Button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg></Button>
                        <div>{leftPosition }</div>
                        <Button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg></Button>
                    </Card.Body>
                </Card>
                <Card className="mx-auto ">
                    <Card.Body className="py-2">
                        <Form.Select
                            defaultValue={'II'}
                            id="middleRotorSelector"
                            onChange={(e) => changeRotor(e.target.value, e.target.id)}>
                            <option>I</option>
                            <option >II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                        </Form.Select>
                        <Button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg></Button>
                        <div>{middlePosition }</div>
                        <Button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg></Button>
                    </Card.Body>
                </Card>
                <Card className="mx-auto ">
                    <Card.Body className="py-2">
                        <Form.Select
                            defaultValue={'I'}
                            id="rightRotorSelector"
                            onChange={(e) => changeRotor(e.target.value, e.target.id)}>
                            <option>I</option>
                            <option>II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                        </Form.Select>
                        <Button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg></Button>
                        <div>{rightPosition }</div>
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