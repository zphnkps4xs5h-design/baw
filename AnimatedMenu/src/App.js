import React from "react";
import "./App.scss";

import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/desserts" component={Desserts} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Desserts() {
  return <p>Find different types of Desserts.</p>;
}

function Contact() {
  return <p>Feel free to CONTACT.</p>;
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          The <b>Food</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos itaque quod, sunt tenetur possimus nam non excepturi nihil laborum eveniet doloribus exercitationem provident beatae dicta minima et quasi, optio totam, nulla deleniti numquam eaque. Neque ab perferendis sunt possimus autem.
        </h5>
      </div>
    </div>
  );
}
export default App;
