import React, { useEffect } from "react";
import "./App.css";
import Lampboard from "./Lampboard";
import Rotors from "./Rotors";
import Plugboard from "./Plugboard";

function App() {

	const handler = (e: KeyboardEvent) => {
		// e.preventDefault()
		console.log(e.key)
	}
	// window.addEventListener("click", handler)
	useEffect(() => {
		window.addEventListener("keydown", handler)
		return () => window.removeEventListener("keydown", handler)
	}, [handler])

	return (
		<div className="App">

			<Rotors />
			<Lampboard />
			<Plugboard />
		</div>
	);
}

export default App;

