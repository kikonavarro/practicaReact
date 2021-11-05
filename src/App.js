import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, { useState } from "react";
import AdvertsPage from "./components/AdvertsPage/AdvertsPage";
import NewAdvertPage from "./components/NewAdvertPage/NewAdvertPage";
import AdvertPage from "./components/AdvertPage/AdvertPage";
import LoginPage from "./components/auth/LoginPage";
import { logout } from "./components/auth/service";
import { AuthContextProvider } from "./components/auth/contex"; 


function App({ isInitiallyLogged }) {
	const [isLogged, setIsLogged] = useState(isInitiallyLogged);
	const handleLogin = () => {
		setIsLogged(true);
	};

	const handleLogout = () => {
		logout().then(() => setIsLogged(false));
	};
	return (
    <Router>
      <AuthContextProvider value ={{isLogged, handleLogout, handleLogin}}>
        <div className="App">
          <Route path="/login" component={LoginPage}/>
          <Route path="/" component={AdvertsPage}/>

          <AdvertsPage />
          <NewAdvertPage />
          <AdvertPage />
          {isLogged ? (<AdvertsPage isLogged={isLogged} onLogout={handleLogout} />): (<LoginPage onLogin={handleLogin} />)}
        </div>
      </AuthContextProvider>
    </Router>
	);
}

export default App;
