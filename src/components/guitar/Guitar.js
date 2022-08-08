import React, { useState } from "react";
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

  return (
    <div className="Guitar">
      <div className="string1">
        <div className="stringReal"></div>
        {string1[0].note.map((note, index) => {
          return (
            <div
              key={`${index}stg1${string1[1].keyNumber[increment1Key++]}`}
              className="fret"
            >
              <div
                id={`${string1[1].keyNumber[increment1ID++]}-1`}
                className={`string ${note} ${
                  string1[1].keyNumber[increment1++]
                } ${suppAlteration(note)} ${note === "C" ? "root" : ""}`}
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
        {string2[0].note.map((note, index) => {
          return (
            <div
              key={`${index}stg2${string2[1].keyNumber[increment2Key++]}`}
              className="fret"
            >
              <div
                id={`${string2[1].keyNumber[increment2ID++]}-2`}
                className={`string ${note} ${
                  string2[1].keyNumber[increment2++]
                } ${suppAlteration(note)} ${note === "C" ? "root" : ""}`}
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
        {string3[0].note.map((note, index) => {
          return (
            <div
              key={`${index}stg3${string3[1].keyNumber[increment3Key++]}`}
              className="fret"
            >
              <div
                id={`${string3[1].keyNumber[increment3ID++]}-3`}
                className={`string ${note} ${
                  string3[1].keyNumber[increment3++]
                } ${suppAlteration(note)} ${note === "C" ? "root" : ""}`}
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
        {string4[0].note.map((note, index) => {
          return (
            <div
              key={`${index}stg4${string4[1].keyNumber[increment4Key++]}`}
              className="fret"
            >
              <div
                id={`${string4[1].keyNumber[increment4ID++]}-4`}
                className={`string ${note} ${
                  string4[1].keyNumber[increment4++]
                } ${suppAlteration(note)} ${note === "C" ? "root" : ""}`}
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
        {string5[0].note.map((note, index) => {
          return (
            <div
              key={`${index}stg5${string5[1].keyNumber[increment5Key++]}`}
              className="fret"
            >
              <div
                id={`${string5[1].keyNumber[increment5ID++]}-5`}
                className={`string ${note} ${
                  string5[1].keyNumber[increment5++]
                } ${suppAlteration(note)} ${note === "C" ? "root" : ""}`}
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
        {string6[0].note.map((note, index) => {
          return (
            <div
              key={`${index}stg6${string6[1].keyNumber[increment6Key++]}`}
              className="fret"
            >
              <div
                id={`${string6[1].keyNumber[increment6ID++]}-6`}
                className={`string ${note} ${
                  string6[1].keyNumber[increment6++]
                } ${suppAlteration(note)} ${note === "C" ? "root" : ""}`}
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
      <div className="form">
        <select
          className="form-select form-select-lg mb-3 selectForm"
          aria-label=".form-select-lg example"
        >
          <option defaultValue>Altération</option>
          <option value="b">b</option>
          <option value="#">#</option>
        </select>

        <select
          className="form-select form-select-lg mb-3 selectForm"
          aria-label=".form-select-lg example"
        >
          <option defaultValue>Tonique</option>
          <option value="C">C</option>
          <option value="Db">Db</option>
          <option value="D">D</option>
          <option value="Eb">Eb</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="Gb">Gb</option>
          <option value="G">G</option>
          <option value="Ab">Ab</option>
          <option value="A">A</option>
          <option value="Bb">Bb</option>
          <option value="B">B</option>
        </select>

        <select
          className="form-select form-select-lg mb-3 selectForm"
          aria-label=".form-select-lg example"
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
    </div>
  );
}

export default Guitar;
