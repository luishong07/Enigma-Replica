import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

	const handler = (e:any) => {
		// e.preventDefault()
		console.log(e)
	}
	// window.addEventListener("click", handler)
	useEffect(()=>{
		window.addEventListener("keydown",handler)
		return ()=>window.removeEventListener("keydown",handler)
	},[handler])

	return (
		<div className="App">
			<header className="App-header">
				<p>Hello there</p>
			</header>
		</div>
	);
}

export default App;

