import React, { useEffect, useState } from "react";
import "./App.css";
import Lampboard from "./Lampboard";
import Rotors from "./Rotors";
import Plugboard from "./Plugboard";

const App:React.FC = () => {
	const letters = /^[a-zA-Z]$/
	const [input, setInput] = useState<string>("")
	const [isKeyUp, setIsKeyUp] = useState<boolean>(false)
	// const 

	const handler = (e: KeyboardEvent) => {
		// console.log(e)

		if(!e.key.match(letters)){
			alert('Not a Letter')
		}else{
			// console.log(e.key.toUpperCase())
			setIsKeyUp(false)
			setInput(e.key.toUpperCase())
		}
	}
	onkeyup = (e)=>{
		setIsKeyUp(true)
		setInput("")
	}
	useEffect(() => {
		window.addEventListener("keydown", handler)
		window.addEventListener("keydown", encript)

		return () => window.removeEventListener("keydown", handler)
	}, [input ])

	onkeydown = ()=>{
		if(!isKeyUp)
		console.log('help')
	}

	const encript = (e: KeyboardEvent)=>{
		if(!e.repeat){
			console.log('test')
		}
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

