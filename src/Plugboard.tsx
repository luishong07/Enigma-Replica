import React, { useEffect } from "react"
import "./Plugboard.css"
// import { Card } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { log } from "console";

interface Props {
    pairs: {},
    setPairs: Function
}


const Plugboard: React.FC<Props> = ({ pairs, setPairs }: Props) => {
    const alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const tempObject: letters = {}
    const usedLetters: string[] = []
    useEffect(() => {
        console.log('re-render');
        // randomPairing()
    }, [])
    type letters = {
        [key: string]: string
    }
    const makePair = (letter: string, e: any) => {
        const inputLetter = e.target.value.toUpperCase()//key pressed
        if (!Object.values(pairs).includes(inputLetter)) {
            console.log('not included')
            usedLetters.push(inputLetter)
            tempObject[letter] = inputLetter

            setPairs({ ...pairs, ...tempObject })

        } else {
            e.target.value = ""
            console.log('else');

        }

        // setPairs({...pairs,...tempObject})

        // tempObject[letter] = inputLetter
        // console.log(tempObject)
        // setPairs({...pairs,...tempObject})

        // console.log(letter, inputLetter)
        // e.target.value = letter
        // if(letter === inputLetter){
        //     console.log('poop')
        //     e.target.value = ""
        //     return
        // }

    }
    const randomPairing = () => {
        const randomPairs: letters = {}
        let newAlphabet = [...alphabet].sort(() => 0.5 - Math.random())
        console.log(newAlphabet)
        for (let i = 0; i < newAlphabet.length; i += 2) {
            randomPairs[newAlphabet[i]] = newAlphabet[i + 1]
            randomPairs[newAlphabet[i + 1]] = newAlphabet[i]
        }
        setPairs(randomPairs)
    }

    const selfPairing = () => {
        const mirrorPairs: letters = {}
        for (let i = 0; i < alphabet.length; i++) {
            mirrorPairs[alphabet[i] as keyof typeof mirrorPairs] = alphabet[i]
        }
        setPairs(mirrorPairs)
    }
    return (
        <Container fluid className="plugboard-container py-2">
            <Stack className="stack-container py-auto" direction="vertical">
                <Stack className="options mx-auto my-auto" direction="horizontal" gap={2}>
                    <Button
                        onClick={selfPairing}
                        variant="primary">
                        Self Pairing
                    </Button>
                    <Button
                        onClick={randomPairing}
                        variant="primary">
                        Random Pairing
                    </Button>
                    <Button variant="primary">Clear Pairs</Button>
                </Stack>
                <Stack className="letter-pair-container my-auto" direction="horizontal" >
                    {alphabet.map(letter => {
                        return <div key={letter} className=" px-2 py-3 mx-1 single-pair">
                            <div>{letter}</div>
                            {/* <Button size="sm" variant="primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                </Button> */}
                            <div className="arrows my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                            </div>
                            <input value={pairs[letter as keyof typeof pairs] ?? ""} onChange={(e) => makePair(letter, e)} className="plug" type="text" maxLength={1} />
                        </div>
                    })}
                </Stack>
            </Stack>
        </Container>
    )
}

export default Plugboard