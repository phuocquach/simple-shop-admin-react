import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import {Routes} from "./routes/routes";
import Footer from './pages/partial/footer';
import Main from './pages/main';
import oidcUserManager from "./service/authService";
import { AuthContext } from "./routes/context";
import PrivateRoute from './routes/privateRoute';

const App = (props) =>  {
  const authenticated = oidcUserManager.isAuthenticated();

  return (
    <>
    <AuthContext.Provider value={authenticated}>
      <div className="App">
          <Route path="/" component={Main}></Route>
        <Footer/>
      </div>

    </AuthContext.Provider>
    <BrowserRouter children={Routes} basename={"/"} />
    </>
  );
}

export default App;
