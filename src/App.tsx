import React, { useEffect, useState } from "react";
import "./App.css";
import Lampboard from "./Lampboard";
import Rotors from "./Rotors";
import Plugboard from "./Plugboard";

const App:React.FC = () => {
	const letters = /^[a-zA-Z]$/
	const [input, setInput] = useState<string>("")
	const [isKeyUp, setIsKeyUp] = useState<boolean>(false)
	// const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false)

	const handler = (e: KeyboardEvent) => {
		// console.log(e)
		if(!e.key.match(letters)){
			alert('Not a Letter')
		}else{
			// console.log('Yay')
			setInput(e.key.toUpperCase())
		}

	}
	useEffect(() => {
		
		window.addEventListener("keydown", handler)
		return () => window.removeEventListener("keydown", handler)
	}, [handler, input])

	onkeyup = (e)=>{
		setIsKeyUp(true)
		// console.log(e)
	}

	return (
		<div className="App">
			<Rotors />
			<Lampboard encryptedLetter={input} isKeyUp={isKeyUp}/>
			<Plugboard />
		</div>
	);
}

export default App;

