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
  //   let increment1 = 0;
  //   let increment2 = 0;
  //   let increment3 = 0;
  //   let increment4 = 0;
  //   let increment5 = 0;
  //   let increment6 = 0;
  //   let increment1Key = 0;
  //   let increment2Key = 0;
  //   let increment3Key = 0;
  //   let increment4Key = 0;
  //   let increment5Key = 0;
  //   let increment6Key = 0;
  //   let increment1ID = 0;
  //   let increment2ID = 0;
  //   let increment3ID = 0;
  //   let increment4ID = 0;
  //   let increment5ID = 0;
  //   let increment6ID = 0;

  const nbStrings = [string1, string2, string3, string4, string5, string6];

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

  function createStrings(stringClass, stringClasss, userInputs, stg, ind) {
    let increment1 = 0;
    let increment1Key = 0;
    let increment1ID = 0;
    return (
      <>
        <div className={stringClasss}>
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
  let i = 1;
  function displayStrings() {
    return;

    createStrings(string1, "string1", userInputs, "stg1");
    createStrings(string2, "string2", userInputs, "stg2");
    createStrings(string3, "string3", userInputs, "stg3");
    createStrings(string4, "string4", userInputs, "stg4");
    createStrings(string5, "string5", userInputs, "stg5");
    createStrings(string6, "string6", userInputs, "stg6");
  }
  const strDsp = displayStrings();
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
          `${index + 1}`
        );
      })}
      <div>Coucou</div>
    </>
  );
}
export default String;
