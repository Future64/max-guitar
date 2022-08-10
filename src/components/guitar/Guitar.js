import React, { useState, useEffect, useContext } from "react";
import { UserInputContext } from "../../context/userInputContext";
import String from "../strings/Strings";
import "./Guitar.css";

function Guitar() {
  const { userInputs } = useContext(UserInputContext);
  const { handleInputChange } = useContext(UserInputContext);

  /**
   * The function `saveSubmit` takes in an event `e` and prevents the default action of the event, then
   * logs the userInputs array to the console
   * @param e - the event object
   */
  function saveSubmit(e) {
    e.preventDefault();
    // console.log(userInputs);
  }

  // console.log(userInputs);
  return (
    <div className="Guitar">
      <String props={userInputs} />
      <div className="flagBox">
        <span className="flag3">3</span>
        <span className="flag5">5</span>
        <span className="flag7">7</span>
        <span className="flag9">9</span>
        <span className="flag12">12</span>
        <span className="flag15">15</span>
        <span className="flag17">17</span>
        <span className="flag19">19</span>
        <span className="flag21">21</span>
        <span className="flag24">24</span>
      </div>
      <form
        id="form"
        className="form"
        onSubmit={(e) => {
          saveSubmit(e);
        }}
      >
        <div className="selectBox">
          <select
            className="form-select form-select-lg mb-3 selectForm"
            aria-label=".form-select-lg example"
            id="alt"
            onChange={handleInputChange}
          >
            <option defaultValue>Altération</option>
            <option value="b">b</option>
            <option value="#">#</option>
          </select>
          {userInputs.alt === "#" ? (
            <div>
              <select
                className="form-select form-select-lg mb-3 selectForm"
                aria-label=".form-select-lg example"
                id="note"
                onChange={handleInputChange}
              >
                <option defaultValue>Tonique</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="D#">D#</option>
                <option value="E">E</option>
                <option value="F#">F#</option>
                <option value="G">G</option>
                <option value="G#">G#</option>
                <option value="A">A</option>
                <option value="A#">A#</option>
                <option value="B">B</option>
              </select>
            </div>
          ) : (
            <div>
              <select
                className="form-select form-select-lg mb-3 selectForm"
                aria-label=".form-select-lg example"
                id="note"
                onChange={handleInputChange}
              >
                <option defaultValue>Tonique</option>
                <option value="C">C</option>
                <option value="Db">Db</option>
                <option value="Eb">Eb</option>
                <option value="F">F</option>
                <option value="Gb">Gb</option>
                <option value="Ab">Ab</option>
                <option value="Bb">Bb</option>
              </select>
            </div>
          )}
          <select
            className="form-select form-select-lg mb-3 selectForm"
            aria-label=".form-select-lg example"
            id="scale"
            onChange={handleInputChange}
          >
            <option defaultValue>Choisir une gamme</option>
            <option value="majPenta">Pentatonique majeure</option>
            <option value="minPenta">Pentatonique mineure</option>
            <option value="majNatScale">Gamme majeure naturel</option>
            <option value="minNatScale">Gamme mineure naturel</option>
            <option value="minHarmoScale">Gamme mineure Harmonique</option>
            <option value="minMeloScale">Gamme mineure Mélodique</option>
          </select>
        </div>

        <button
          form="form"
          type="submit"
          className="btn btn-success buttonValid"
        >
          Valider
        </button>
      </form>
    </div>
  );
}

export default Guitar;
