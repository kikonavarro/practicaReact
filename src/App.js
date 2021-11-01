import "./App.css";
import React from "react";
import AdvertsPage from "./components/AdvertsPage/AdvertsPage";
import NewAdvertPage from "./components/NewAdvertPage/NewAdvertPage";
import AdvertPage from "./components/AdvertPage/AdvertPage";

function App() {
	return (
		<div className="App">
			<AdvertsPage />
			<NewAdvertPage />
			<AdvertPage />
		</div>
	);
}

export default App;
