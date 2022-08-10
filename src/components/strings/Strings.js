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

import "./Strings.css";

function String(props) {
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

  const userInputs = props.props;

  function displayScale(note) {
    let classN = "hidden";
    if (scaleSorted.find((elm) => elm === note)) {
      classN = "";
      return classN;
    }
    classN = "hidden";
    return classN;
  }

  function handleScales() {
    for (let i = 0; i < scales[0].majorScale.key.length; i++) {
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

  useEffect(() => {
    handleScales();
  }, [userInputs.note]);

  return (
    <>
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
    </>
  );
}
export default String;
