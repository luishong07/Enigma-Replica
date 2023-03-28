import React, { useEffect, useState } from "react";
import "./App.css";
import Lampboard from "./Lampboard";
import Rotors from "./Rotors";
import Plugboard from "./Plugboard";

function App() {

	const [input, setInput] = useState("")
	const handler = (e: KeyboardEvent) => {
		setInput(e.key)
	}
	useEffect(() => {
		window.addEventListener("keydown", handler)
		return () => window.removeEventListener("keydown", handler)
	}, [handler])



	return (
		<div className="App">
			<Rotors />
			<Lampboard  />
			<Plugboard />
		</div>
	);
}

export default App;

