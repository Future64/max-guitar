import React, { useState } from "react";
import { scales, modes } from "../../data/scalesData";
import "./Guitar.css";

function Guitar() {
  const [string1, useString1] = useState([
    {
      note: [
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
      ],
    },
    {
      keyNumber: [
        "E2",
        "F2",
        "F#2",
        "G2",
        "G#2",
        "A2",
        "A#2",
        "B2",
        "C3",
        "C#3",
        "D3",
        "D#3",
        "E3",
        "F3",
        "F#3",
        "G3",
        "G#3",
        "A3",
        "A#3",
        "B3",
        "C4",
        "C#4",
        "D4",
        "D#4",
        "E4",
      ],
    },
  ]);
  const [string2, useString2] = useState([
    {
      note: [
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
      ],
    },
    {
      keyNumber: [
        "B1",
        "C2",
        "C#2",
        "D2",
        "D#2",
        "E2",
        "F2",
        "F#2",
        "G2",
        "G#2",
        "A2",
        "A#2",
        "B2",
        "C3",
        "C#3",
        "D3",
        "D#3",
        "E3",
        "F3",
        "F#3",
        "G3",
        "G#3",
        "A3",
        "A#3",
        "B3",
      ],
    },
  ]);
  const [string3, useString3] = useState([
    {
      note: [
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
      ],
    },
    {
      keyNumber: [
        "G1",
        "G#1",
        "A1",
        "A#1",
        "B1",
        "C2",
        "C#2",
        "D2",
        "D#2",
        "E2",
        "F2",
        "F#2",
        "G2",
        "G#2",
        "A2",
        "A#2",
        "B2",
        "C3",
        "C#3",
        "D3",
        "D#3",
        "E3",
        "F3",
        "F#3",
        "G3",
      ],
    },
  ]);
  const [string4, useString4] = useState([
    {
      note: [
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
      ],
    },
    {
      keyNumber: [
        "D1",
        "D#1",
        "E1",
        "F1",
        "F#",
        "G1",
        "G#1",
        "A1",
        "A#1",
        "B1",
        "C2",
        "C#2",
        "D2",
        "D#2",
        "E2",
        "F2",
        "F#2",
        "G2",
        "G#2",
        "A2",
        "A#2",
        "B2",
        "C3",
        "C#3",
        "D3",
      ],
    },
  ]);
  const [string5, useString5] = useState([
    {
      note: [
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
      ],
    },
    {
      keyNumber: [
        "A0",
        "A#0",
        "B0",
        "C1",
        "C#1",
        "D1",
        "D#1",
        "E1",
        "F1",
        "F#1",
        "G1",
        "G#1",
        "A1",
        "A#1",
        "B1",
        "C2",
        "C#2",
        "D2",
        "D#2",
        "E2",
        "F2",
        "F#2",
        "G2",
        "G#2",
        "A2",
      ],
    },
  ]);
  const [string6, useString6] = useState([
    {
      note: [
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",
        "E",
      ],
    },
    {
      keyNumber: [
        "E0",
        "F0",
        "F#0",
        "G0",
        "G#0",
        "A0",
        "A#0",
        "B0",
        "C1",
        "C#1",
        "D1",
        "D#1",
        "E1",
        "F1",
        "F#1",
        "G1",
        "G#1",
        "A1",
        "A#1",
        "B1",
        "C2",
        "C#2",
        "D2",
        "D#2",
        "E2",
      ],
    },
  ]);
  console.log(string2[1].keyNumber[1]);
  let increment1 = 0;
  let increment2 = 0;
  let increment3 = 0;
  let increment4 = 0;
  let increment5 = 0;
  let increment6 = 0;
  let increment1ID = 0;
  let increment2ID = 0;
  let increment3ID = 0;
  let increment4ID = 0;
  let increment5ID = 0;
  let increment6ID = 0;

  return (
    <div className="Guitar">
      {/* <h1>Guitar</h1> */}
      <div className="string1">
        <div className="stringReal"></div>
        {string1[0].note.map((note, index) => {
          return (
            <div className="fret">
              <div
                key={`${index}stg1`}
                id={`${string1[1].keyNumber[increment1ID++]}-1`}
                className={`string ${note} ${
                  string1[1].keyNumber[increment1++]
                } ${
                  note === "F#" ||
                  note === "G#" ||
                  note === "A#" ||
                  note === "C#" ||
                  note === "D#"
                    ? "hidden"
                    : ""
                } ${note === "C" ? "root" : ""}`}
              >
                {" "}
                {note}{" "}
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
            <div className="fret">
              <div
                key={`${index}stg2`}
                id={`${string2[1].keyNumber[increment2ID++]}-2`}
                className={`string ${note} ${
                  string2[1].keyNumber[increment2++]
                } ${
                  note === "F#" ||
                  note === "G#" ||
                  note === "A#" ||
                  note === "C#" ||
                  note === "D#"
                    ? "hidden"
                    : ""
                } ${note === "C" ? "root" : ""}`}
              >
                {" "}
                {note}{" "}
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
            <div className="fret">
              <div
                key={`${index}stg3`}
                id={`${string3[1].keyNumber[increment3ID++]}-3`}
                className={`string ${note} ${
                  string3[1].keyNumber[increment3++]
                } ${
                  note === "F#" ||
                  note === "G#" ||
                  note === "A#" ||
                  note === "C#" ||
                  note === "D#"
                    ? "hidden"
                    : ""
                } ${note === "C" ? "root" : ""}`}
              >
                {" "}
                {note}{" "}
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
            <div className="fret">
              <div
                key={`${index}stg4`}
                id={`${string4[1].keyNumber[increment4ID++]}-4`}
                className={`string ${note} ${
                  string4[1].keyNumber[increment4++]
                } ${
                  note === "F#" ||
                  note === "G#" ||
                  note === "A#" ||
                  note === "C#" ||
                  note === "D#"
                    ? "hidden"
                    : ""
                } ${note === "C" ? "root" : ""}`}
              >
                {" "}
                {note}{" "}
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
            <div className="fret">
              <div
                key={`${index}stg5`}
                id={`${string5[1].keyNumber[increment5ID++]}-5`}
                className={`string ${note} ${
                  string5[1].keyNumber[increment5++]
                } ${
                  note === "F#" ||
                  note === "G#" ||
                  note === "A#" ||
                  note === "C#" ||
                  note === "D#"
                    ? "hidden"
                    : ""
                } ${note === "C" ? "root" : ""}`}
              >
                {" "}
                {note}{" "}
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
            <div className="fret">
              <div
                key={`${index}stg6`}
                id={`${string6[1].keyNumber[increment6ID++]}-6`}
                className={`string ${note} ${
                  string6[1].keyNumber[increment6++]
                } ${
                  note === "F#" ||
                  note === "G#" ||
                  note === "A#" ||
                  note === "C#" ||
                  note === "D#"
                    ? "hidden"
                    : ""
                } ${note === "C" ? "root" : ""}`}
              >
                {" "}
                {note}{" "}
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
        <label
          for="checked-toggle"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="checked-toggle"
            class="sr-only peer"
            checked
          ></input>
          <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ml-3 text-sm font-medium text-white-900 dark:text-white-300">
            Checked toggle
          </span>
        </label>
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-white-900 dark:text-gray-400"
        >
          Select an option
        </label>
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choix de gamme ou mode</option>
          <option value="majorPentaScale">Pentatonique majeure</option>
          <option value="minorPentaScale">Pentatonique mineure</option>
          <option value="majorNatScale">Majeure naturel</option>
          <option value="minorNatSclale">Mineure naturel</option>
          <option value="minorHarmoScale">Mineure harmonique</option>
          <option value="minorMeloScale">Mineure Mélodique</option>
        </select>
      </div>
    </div>
  );
}

export default Guitar;
