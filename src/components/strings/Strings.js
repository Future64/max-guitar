import React, { useState, useEffect } from "react";
import { scales } from "../../data/scalesData";
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
  let [scaleSorted, setScaleSorted] = useState([]);
  const nbStrings = [string1, string2, string3, string4, string5, string6];
  const userInputs = props.props;
  const majScaleKey = scales[0].majorScale.key;

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
    for (let i = 0; i < majScaleKey.length; i++) {
      if (majScaleKey[i][0] === userInputs.note) {
        setScaleSorted(
          majScaleKey[i].filter(function (ele, pos) {
            return majScaleKey[i].indexOf(ele) === pos;
          })
        );
      }
    }
  }

  function createStrings(stringClass, stringClasss, userInputs, stg, ind, i) {
    let increment1 = 0;
    let increment1Key = 0;
    let increment1ID = 0;
    return (
      <>
        <div className={stringClasss} key={`${stringClass}${i}${stg}`}>
          <div className="stringReal"></div>
          {userInputs.alt === "#"
            ? stringClass[1][0].noteSharp.map((note, index) => {
                return (
                  <div
                    key={`${index}${stg}${
                      stringClass[2][0].keyNumber[increment1Key++]
                    }`}
                    className="fret"
                  >
                    <div
                      id={`${
                        stringClass[2][0].keyNumber[increment1ID++]
                      }-${ind}`}
                      className={`string ${note} ${
                        stringClass[2][0].keyNumber[increment1++]
                      } ${displayScale(note)} ${
                        note === userInputs.note ? "root" : ""
                      }`}
                    >
                      {note}
                    </div>
                  </div>
                );
              })
            : stringClass[0].noteFlat.map((note, index) => {
                return (
                  <div
                    key={`${index}${stg}${
                      stringClass[2][0].keyNumber[increment1Key++]
                    }`}
                    className="fret"
                  >
                    <div
                      id={`${
                        stringClass[2][0].keyNumber[increment1ID++]
                      }-${ind}`}
                      className={`string ${note} ${
                        stringClass[2][0].keyNumber[increment1++]
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

  useEffect(() => {
    handleScales();
  }, [userInputs.note]);

  return (
    <>
      {nbStrings.map((stg, index) => {
        return createStrings(
          stg,
          `string${index + 1}`,
          userInputs,
          `${stg}`,
          `${index + 1}`,
          index
        );
      })}
    </>
  );
}
export default String;
