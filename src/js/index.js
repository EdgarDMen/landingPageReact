//import react into the bundle
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home.jsx";


// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import JumbotronComponent from "./component/JumbotronComponent";
import FooterComponent from "./component/FooterComponent";
import CardSectionComponent from "./component/CardSectionComponent";
import NavbarComponent from "./component/NavbarComponent";


//render your react application
ReactDOM.render(<Home/>, document.querySelector('#app'));

