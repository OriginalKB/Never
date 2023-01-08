import React, {useState} from "react";
import "./App.css";
import {Register} from "./Register";
import {Login}  from "./Login";
import {Helmet} from "react-helmet";

function App() {

const [ currentForm, setCurrentForm] = useState ('login');

  const toggleForm = (formName) => {
    setCurrentForm (formName);
  }

  return (
    <div className="App" >
      <Helmet>
        <meta CharSet="utf-8"/>
        <title>Builders GRID APP</title>
        <link rel="canonical" href="http://mysite.com/example"/>
        <meta name="description" content="Web App for construction artisans and employers"/>
      </Helmet>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
