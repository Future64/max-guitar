import React from "react";
import Guitar from "../../components/guitar/Guitar";
import Header from "../../components/header/Header";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Guitar />
    </div>
  );
}

export default Home;
