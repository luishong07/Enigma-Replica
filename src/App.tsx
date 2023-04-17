import React, { useEffect, useState } from "react";
import "./App.css";
import Lampboard from "./Lampboard";
import Rotors from "./Rotors";
import Plugboard from "./Plugboard";

const App: React.FC = () => {
	const letters = /^[a-zA-Z]$/
	const [input, setInput] = useState<string>("")
	const [isKeyUp, setIsKeyUp] = useState<boolean>(false)
	const [rightPosition, setRightPosition] = useState<number>(0)
	const [middlePosition, setMiddlePosition] = useState<number>(0)
	const [leftPosition, setLeftPosition] = useState<number>(0)


	const handler = (e: KeyboardEvent) => {
		// console.log(e)

		if (!e.key.match(letters)) {
			alert('Not a Letter')
		} else {
			// console.log(e.key.toUpperCase())
			setIsKeyUp(false)
			setInput(e.key.toUpperCase())
		}
	}
	onkeyup = (e) => {//this is controlling the lit up styling for the keys
		setIsKeyUp(true)
		setInput("")
	}
	useEffect(() => {
		window.addEventListener("keydown", handler)
		window.addEventListener("keydown", encript)

		return () => window.removeEventListener("keydown", handler)
	}, [input])

	// onkeydown = ()=>{//
	// 	if(!isKeyUp)
	// 	console.log('help')
	// }

	const encript = (e: KeyboardEvent) => {//this runs only once regardless of key being continuosly being pressed
		if (!e.repeat) {
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




		}
	}

	return (
		<div className="App">
			<Rotors leftPosition={leftPosition} middlePosition={middlePosition} rightPosition={rightPosition} />
			<Lampboard encryptedLetter={input} isKeyUp={isKeyUp} />
			<Plugboard />
		</div>
	);
}

export default App;

