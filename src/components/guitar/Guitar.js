import React, { useState, useEffect } from "react";
import { scales, modes } from "../../data/scalesData";
import {
  string1,
  string2,
  string3,
  string4,
  string5,
  string6,
} from "../../data/strings.js";
import "./Guitar.css";

function Guitar() {
  let increment1 = 0;
  let increment2 = 0;
  let increment3 = 0;
  let increment4 = 0;
  let increment5 = 0;
  let increment6 = 0;
  let increment1Key = 0;
  let increment2Key = 0;
  let increment3Key = 0;
  let increment4Key = 0;
  let increment5Key = 0;
  let increment6Key = 0;
  let increment1ID = 0;
  let increment2ID = 0;
  let increment3ID = 0;
  let increment4ID = 0;
  let increment5ID = 0;
  let increment6ID = 0;

  let [scaleSorted, setScaleSorted] = useState([]);

  const [userInputs, setUserInputs] = useState({
    alt: "",
    note: "",
    scale: "",
  });

  /**
   * It takes an event as an argument, and then sets the state of the userInputs object to the value of
   * the input that was changed
   * @param event - The event object that is passed to the function.
   */
  function handleInputChange(event) {
    const inputName = event.target.id;
    setUserInputs({ ...userInputs, [inputName]: event.target.value });
  }

  /**
   * If the note is F#, G#, A#, C#, or D#, then return "hidden", otherwise return ""
   * @param note - the note that is being played
   * @returns The function suppAlteration is returning a string.
   */
  function suppAlteration(note) {
    if (
      note === "F#" ||
      note === "G#" ||
      note === "A#" ||
      note === "C#" ||
      note === "D#"
    ) {
      return "hidden";
    }
    return "";
  }

  function displayScale(note) {
    let classN = "hidden";
    if (scaleSorted.find((elm) => elm === note)) {
      classN = "";
      return classN;
    }
    classN = "hidden";
    return classN;
  }

  /**
   * It loops through the array of arrays, and if the first element of the array matches the user input,
   * it filters out the duplicates and sets the state
   * @returns the scaleSorted array.
   */
  function handleScales() {
    for (let i = 0; i < scales[0].majorScale.key.length; i++) {
      // console.log(scales[0].majorScale.key[i]);
      if (scales[0].majorScale.key[i][0] === userInputs.note) {
        setScaleSorted(
          scales[0].majorScale.key[i].filter(function (ele, pos) {
            return scales[0].majorScale.key[i].indexOf(ele) == pos;
          })
        );
        break;
      }
    }
  }

  /**
   * The function `saveSubmit` takes in an event `e` and prevents the default action of the event, then
   * logs the userInputs array to the console
   * @param e - the event object
   */
  function saveSubmit(e) {
    e.preventDefault();
    console.log(userInputs);
  }

  useEffect(() => {
    handleScales();
  }, [userInputs.note]);

  // console.log(scaleSorted);
  // console.log(userInputs);
  console.log(string1[1][0].noteSharp);

  return (
    <div className="Guitar">
      <div className="string1">
        <div className="stringReal"></div>
        {userInputs.alt === "#"
          ? string1[1][0].noteSharp.map((note, index) => {
              return (
                <div
                  key={`${index}stg1${
                    string1[2][0].keyNumber[increment1Key++]
                  }`}
                  className="fret"
                >
                  <div
                    id={`${string1[2][0].keyNumber[increment1ID++]}-1`}
                    className={`string ${note} ${
                      string1[2][0].keyNumber[increment1++]
                    } ${displayScale(note)} ${
                      note === userInputs.note ? "root" : ""
                    }`}
                  >
                    {note}
                  </div>
                </div>
              );
            })
          : string1[0].noteFlat.map((note, index) => {
              return (
                <div
                  key={`${index}stg1${
                    string1[2][0].keyNumber[increment1Key++]
                  }`}
                  className="fret"
                >
                  <div
                    id={`${string1[2][0].keyNumber[increment1ID++]}-1`}
                    className={`string ${note} ${
                      string1[2][0].keyNumber[increment1++]
                    } ${displayScale(note)} ${
                      note === userInputs.note ? "root" : ""
                    }`}
                  >
                    {note}
                  </div>
                </div>
              );
            })}
      </div>
      <br />
      <div className="string2">
        <div className="stringReal"></div>
        {userInputs.alt === "#"
          ? string2[1][0].noteSharp.map((note, index) => {
              return (
                <div
                  key={`${index}stg2${
                    string2[2][0].keyNumber[increment2Key++]
                  }`}
                  className="fret"
                >
                  <div
                    id={`${string2[2][0].keyNumber[increment2ID++]}-2`}
                    className={`string ${note} ${
                      string2[2][0].keyNumber[increment2++]
                    } ${displayScale(note)} ${
                      note === userInputs.note ? "root" : ""
                    }`}
                  >
                    {note}
                  </div>
                </div>
              );
            })
          : string2[0].noteFlat.map((note, index) => {
              return (
                <div
                  key={`${index}stg2${
                    string2[2][0].keyNumber[increment2Key++]
                  }`}
                  className="fret"
                >
                  <div
                    id={`${string2[2][0].keyNumber[increment2ID++]}-2`}
                    className={`string ${note} ${
                      string2[2][0].keyNumber[increment2++]
                    } ${displayScale(note)} ${
                      note === userInputs.note ? "root" : ""
                    }`}
                  >
                    {note}
                  </div>
                </div>
              );
            })}
      </div>
      <br />
      <div className="string3">
        <div className="stringReal"></div>
        {userInputs.alt === "#"
          ? string3[1][0].noteSharp.map((note, index) => {
              return (
                <div
                  key={`${index}stg3${
                    string3[2][0].keyNumber[increment3Key++]
                  }`}
                  className="fret"
                >
                  <div
                    id={`${string3[2][0].keyNumber[increment3ID++]}-3`}
                    className={`string ${note} ${
                      string3[2][0].keyNumber[increment3++]
                    } ${displayScale(note)} ${
                      note === userInputs.note ? "root" : ""
                    }`}
                  >
                    {note}
                  </div>
                </div>
              );
            })
          : string3[0].noteFlat.map((note, index) => {
              return (
                <div
                  key={`${index}stg3${
                    string3[2][0].keyNumber[increment3Key++]
                  }`}
                  className="fret"
                >
                  <div
                    id={`${string3[2][0].keyNumber[increment3ID++]}-3`}
                    className={`string ${note} ${
                      string3[2][0].keyNumber[increment3++]
                    } ${displayScale(note)} ${
                      note === userInputs.note ? "root" : ""
                    }`}
                  >
                    {note}
                  </div>
                </div>
              );
            })}
      </div>
      <br />
      <div className="string4">
        <div className="stringReal"></div>
        {userInputs.alt === "#"
          ? string4[1][0].noteSharp.map((note, index) => {
              return (
                <div
                  key={`${index}stg4${
                    string4[2][0].keyNumber[increment4Key++]
                  }`}
                  className="fret"
                >
                  <div
                    id={`${string4[2][0].keyNumber[increment4ID++]}-4`}
                    className={`string ${note} ${
                      string4[2][0].keyNumber[increment4++]
                    } ${displayScale(note)} ${
                      note === userInputs.note ? "root" : ""
                    }`}
                  >
                    {note}
                  </div>
                </div>
              );
            })
          : string4[0].noteFlat.map((note, index) => {
              return (
                <div
                  key={`${index}stg4${
                    string4[2][0].keyNumber[increment4Key++]
                  }`}
                  className="fret"
                >
                  <div
                    id={`${string4[2][0].keyNumber[increment4ID++]}-4`}
                    className={`string ${note} ${
                      string4[2][0].keyNumber[increment4++]
                    } ${displayScale(note)} ${
                      note === userInputs.note ? "root" : ""
                    }`}
                  >
                    {note}
                  </div>
                </div>
              );
            })}
      </div>
      <br />
      <div className="string5">
        <div className="stringReal"></div>
        {userInputs.alt === "#"
          ? string5[1][0].noteSharp.map((note, index) => {
              return (
                <div
                  key={`${index}stg5${
                    string5[2][0].keyNumber[increment5Key++]
                  }`}
                  className="fret"
                >
                  <div
                    id={`${string5[2][0].keyNumber[increment5ID++]}-5`}
                    className={`string ${note} ${
                      string5[2][0].keyNumber[increment5++]
                    } ${displayScale(note)} ${
                      note === userInputs.note ? "root" : ""
                    }`}
                  >
                    {note}
                  </div>
                </div>
              );
            })
          : string5[0].noteFlat.map((note, index) => {
              return (
                <div
                  key={`${index}stg5${
                    string5[2][0].keyNumber[increment5Key++]
                  }`}
                  className="fret"
                >
                  <div
                    id={`${string5[2][0].keyNumber[increment5ID++]}-5`}
                    className={`string ${note} ${
                      string5[2][0].keyNumber[increment5++]
                    } ${displayScale(note)} ${
                      note === userInputs.note ? "root" : ""
                    }`}
                  >
                    {note}
                  </div>
                </div>
              );
            })}
      </div>
      <br />
      <div className="string6">
        <div className="stringReal"></div>
        {userInputs.alt === "#"
          ? string6[1][0].noteSharp.map((note, index) => {
              return (
                <div
                  key={`${index}stg6${
                    string6[2][0].keyNumber[increment6Key++]
                  }`}
                  className="fret"
                >
                  <div
                    id={`${string6[2][0].keyNumber[increment6ID++]}-6`}
                    className={`string ${note} ${
                      string6[2][0].keyNumber[increment6++]
                    } ${displayScale(note)} ${
                      note === userInputs.note ? "root" : ""
                    }`}
                  >
                    {note}
                  </div>
                </div>
              );
            })
          : string6[0].noteFlat.map((note, index) => {
              return (
                <div
                  key={`${index}stg6${
                    string6[2][0].keyNumber[increment6Key++]
                  }`}
                  className="fret"
                >
                  <div
                    id={`${string6[2][0].keyNumber[increment6ID++]}-6`}
                    className={`string ${note} ${
                      string6[2][0].keyNumber[increment6++]
                    } ${displayScale(note)} ${
                      note === userInputs.note ? "root" : ""
                    }`}
                  >
                    {note}
                  </div>
                </div>
              );
            })}
      </div>
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
