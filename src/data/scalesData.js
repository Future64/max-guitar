export const scales = [
  {
    chromaticScale: {
      build: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
      name: "Chromatic",
      notesSharp: [
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
      notesFlat: [
        "C",
        "Db",
        "D",
        "Eb",
        "E",
        "F",
        "Gb",
        "G",
        "Ab",
        "A",
        "Bb",
        "B",
      ],
      description:
        "The chromatic scale is the most common scale in music. It is a scale with all the notes of the chromatic scale.",
    },
    majorScale: {
      build: [1, 1, 0.5, 1, 1, 1, 0.5],
      name: "Major",
      key: [
        ["C", "D", "E", "F", "G", "A", "B"],
        ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
        ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
        ["D", "E", "F#", "G", "A", "B", "C#"],
        ["D#", "E#", "G", "G#", "A#", "B#", "D"],
        ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
        ["E", "F#", "G#", "A", "B", "C#", "D#"],
        ["F", "G", "A", "Bb", "C", "D", "E"],
        ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
        ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
        ["G", "A", "B", "C", "D", "E", "F#"],
        ["G#", "A#", "B#", "C#", "D#", "E#", "G"],
        ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
        ["A", "B", "C#", "D", "E", "F#", "G#"],
        ["A#", "B#", "D", "D#", "E#", "G", "A"],
        ["Bb", "C", "D", "Eb", "F", "G", "A"],
        ["B", "C#", "D#", "E", "F#", "G#", "A#"],
      ],
      notes: [
        { C: ["C", "D", "E", "F", "G", "A", "B"] },
        { CSharp: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"] },
        { Db: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"] },
        { D: ["D", "E", "F#", "G", "A", "B", "C#"] },
        { DSharp: ["D#", "E#", "G", "G#", "A#", "B#", "D"] },
        { Eb: ["Eb", "F", "G", "Ab", "Bb", "C", "D"] },
        { E: ["E", "F#", "G#", "A", "B", "C#", "D#"] },
        { F: ["F", "G", "A", "Bb", "C", "D", "E"] },
        { FSharp: ["F#", "G#", "A#", "B", "C#", "D#", "E#"] },
        { Gb: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"] },
        { G: ["G", "A", "B", "C", "D", "E", "F#"] },
        { GSharp: ["G#", "A#", "B#", "C#", "D#", "E#", "G"] },
        { Ab: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"] },
        { A: ["A", "B", "C#", "D", "E", "F#", "G#"] },
        { ASharp: ["A#", "B#", "D", "D#", "E#", "G", "A"] },
        { Bb: ["Bb", "C", "D", "Eb", "F", "G", "A"] },
        { B: ["B", "C#", "D#", "E", "F#", "G#", "A#"] },
      ],
      description:
        "The major scale is the most common scale in music. It is a scale with all the notes of the chromatic scale.",
    },
    minorNatScale: {
      build: [1, 0.5, 1, 1, 0.5, 1, 1],
      name: "Minor Natural",
      notes: ["C", "D", "D#", "F", "F#", "G", "A"],
      description:
        "The minor natural scale is the most common scale in music. It is a scale with all the notes of the chromatic scale.",
    },
    minorHarmonicScale: {
      build: [1, 0.5, 1, 1, 0.5, 1.5, 0.5],
      name: "Minor Harmonic",
      notes: ["C", "D", "D#", "F", "F#", "G", "A#"],
      description:
        "The minor harmonic scale is the most common scale in music. It is a scale with all the notes of the chromatic scale.",
    },
    minorMelodicScale: {
      build: [1, 0.5, 1, 1, 1, 1, 0.5],
      name: "Minor Melodic",
      notes: ["C", "D", "D#", "F", "F#", "G", "A"],
      description:
        "The minor melodic scale is the most common scale in music. It is a scale with all the notes of the chromatic scale.",
    },
  },
];
// export default scales;

export const modes = [
  {
    ionian: {
      build: [1, 1, 0.5, 1, 1, 1, 0.5],
      name: "Ionian",
      description:
        "The ionian scale is the default scale for the ionian mode. It is a major scale with the first note being a major third and the last note being a major seventh.",
    },
    dorian: {
      buitld: [1, 0.5, 1, 1, 1, 0.5, 1],
      name: "Dorian",
      description:
        "Dorian mode is a scale that starts with a 2nd and 3rd degree of the tonic, and then follows the same pattern of intervals. It is a major scale with the added note of the dominant.",
    },
    phrygian: {
      build: [0.5, 1, 1, 1, 0.5, 1, 1],
      name: "Phrygian",
      description:
        "Phrygian mode is a scale that starts with a 2nd and 3rd degree of the tonic, and then follows the same pattern of intervals. It is a major scale with the added note of the subdominant.",
    },
    lydian: {
      build: [1, 1, 1, 0.5, 1, 1, 0.5],
      name: "Lydian",
      description:
        "Lydian mode is a scale that starts with a 2nd and 3rd degree of the tonic, and then follows the same pattern of intervals. It is a major scale with the added note of the superdominant.",
    },
    mixolydian: {
      build: [1, 1, 0.5, 1, 1, 0.5, 1],
      name: "Mixolydian",
      description:
        "Mixolydian mode is a scale that starts with a 2nd and 3rd degree of the tonic, and then follows the same pattern of intervals. It is a major scale with the added note of the subdominant.",
    },
    aeolian: {
      build: [1, 0.5, 1, 1, 0.5, 1, 1],
      name: "Aeolian",
      description:
        "Aeolian mode is a scale that starts with a 2nd and 3rd degree of the tonic, and then follows the same pattern of intervals. It is a major scale with the added note of the subdominant.",
    },
    locrian: {
      build: [0.5, 1, 1, 0.5, 1, 1, 1],
      name: "Locrian",
      description:
        "Locrian mode is a scale that starts with a 2nd and 3rd degree of the tonic, and then follows the same pattern of intervals. It is a major scale with the added note of the subdominant.",
    },
  },
];
// export default [scales, modes];
