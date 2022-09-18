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

  /**
   * It takes a scale and a root note, and returns a new scale with the root note at the beginning
   * @param scale - the scale you want to use
   * @param rootNote - the note you want to start the scale on
   * @returns An array of notes that are in the scale.
   */
  const splitAndBuildScale = (scale, rootNote) => {
    let newScale = scale.slice(scale.indexOf(rootNote));
    let newScaleZero = scale.slice(0, scale.indexOf(rootNote));
    let scaleFinished = [...newScale, ...newScaleZero];
    return scaleFinished;
  };

  /**
   * It takes a root note and an accidental, and returns a chromatic scale based on the root note and
   * accidental
   * @param rootNote - The root note of the scale.
   * @param alt - "sharp" or "flat"
   * @returns An array of notes in the chromatic scale
   */
  const buildNewChromaScale = (rootNote, alt) => {
    if (alt === "#") {
      return splitAndBuildScale(scales[0].notesSharp, rootNote);
    } else if (alt === "b") {
      return splitAndBuildScale(scales[0].notesFlat, rootNote);
    } else {
      return "Please enter a valid root note and accidentals";
    }
  };

  /**
   * It takes in a scaleForLive array and a chromaScale array, and returns a builtMajorScale array
   * @param scaleForLive - an array of numbers that represent the scale you want to build.
   * @param chromaScale - an array of all the notes in the chromatic scale
   * @returns An array of the notes in the scale.
   */
  const scaleConstructor = (scaleForLive, chromaScale) => {
    let builtMajorScale = [];
    for (let i = 0; i < scaleForLive.length; i++) {
      builtMajorScale.push(chromaScale[scaleForLive[i]]);
    }
    return builtMajorScale;
  };

  function displayScale(note) {
    let classN = "hidden";
    if (scaleSorted.find((elm) => elm === note)) {
      classN = "";
      return classN;
    }
    classN = "hidden";
    return classN;
  }

  function selectScale() {
    if (userInputs.scale === "Pentatonique majeure") {
      return scales[0].majorPentatonicScale;
    } else if (userInputs.scale === "Pentatonique mineure") {
      return scales[0].minorPentatonicScale;
    } else if (userInputs.scale === "Gamme majeure naturel") {
      return scales[0].naturalMajorScale;
    } else if (userInputs.scale === "Gamme mineure naturel") {
      return scales[0].naturalMinorScale;
    } else if (userInputs.scale === "Gamme mineure Harmonique") {
      return scales[0].harmonicMinorScale;
    } else if (userInputs.scale === "Gamme mineure Mélodique") {
      return scales[0].melodicMinorScale;
    }
  }

  function createStrings(stringClass, stringClasss, userInputs, stg, ind, i) {
    let increment1 = 0;
    let increment1Key = 0;
    let increment1ID = 0;
    return (
      <>
        <div
          className={stringClasss}
          key={`${stringClass.toString()}${i.toString()}${stg.toString()}`}
        >
          <div
            className="stringReal"
            key={`${stringClass}${i}${stg}-string`}
          ></div>
          {userInputs.alt === "#"
            ? stringClass[1][0].noteSharp.map((note, index) => {
                return (
                  <div
                    key={`${index.toString()}${stg.toString()}${
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
                    key={`${index.toString()}${stg.toString()}${
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
    console.log(selectScale());

    setScaleSorted(
      scaleConstructor(
        selectScale() === undefined
          ? scales[0].majorPentatonicScale
          : selectScale(),
        buildNewChromaScale(userInputs.note, userInputs.alt)
      )
    );
  }, [userInputs.note, userInputs.alt, userInputs.scale]);

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
