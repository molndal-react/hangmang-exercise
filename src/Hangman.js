import React, { Component } from "react";
import "./Hangman.css";
import img from "./images/0.jpg";
import ButtonComponent from "./ButtonComponent";
import { randomWord } from "./words";

class Hangman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: new Set(),
      answer: randomWord(),
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
  }

  guessWord() {
    let splittedWord = this.state.answer.split("");
    return splittedWord.map((ltr) => "_");
  }

  generateAlphabet() {
    let arrLetter = "abcdefghijklmnopqrstuvwxyzåäö".split("");
    return arrLetter.map((ltr) => (
      <ButtonComponent
        isClicked={this.handleOnClick}
        key={ltr}
        ltr={ltr}
        isDisabled={this.state.isDisabled.has(ltr)}
      />
    ));
  }

  handleOnClick(e) {
    let ltrValue = e.target.innerText;
    this.setState((st) => ({
      isDisabled: st.isDisabled.add(ltrValue),
    }));
  }

  onClickReset() {
    this.setState((st) => ({
      isDisabled: new Set(),
    }));
  }

  render() {
    return (
      <div className="hangman">
        <h1>Hangman</h1>
        <p>Syftet med spelet är att ......</p>
        <img src={img} alt={"alt"}></img>
        <p className="hangman-word">{this.guessWord()}</p>
        <p>Antal gissningar: 0</p>
        <div className="hangman-btns">{this.generateAlphabet()}</div>
        <button onClick={this.onClickReset} className="resetBtn">
          Starta om
        </button>
      </div>
    );
  }
}

export default Hangman;
