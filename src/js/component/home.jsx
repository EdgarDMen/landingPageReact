import React from "react";
import JumbotronComponent from "./JumbotronComponent";
import FooterComponent from "./FooterComponent";
import CardSectionComponent from "./CardSectionComponent";
import NavbarComponent from "./NavbarComponent";

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <JumbotronComponent />
      <CardSectionComponent />
      <FooterComponent />
    </div>
  );
};

export default Home;

