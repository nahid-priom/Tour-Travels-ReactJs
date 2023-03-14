import React from "react";
import { Link } from "react-router-dom";
import "./HeroStyle.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="heroImg" src={props.heroImg}></img>
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <Link to="https://www.google.com/maps" className={props.btnClass}>{props.buttonText}</Link>

        </div>
      </div>
    </>
  );
}
export default Hero;
