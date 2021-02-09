"use strict";

const SHARPS = [
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
];
const FLATS = ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"];

const USEFLATS = [
  "F",
  "g",
  "d",
  "Ab",
  "Bb",
  "Db",
  "Eb",
  "Gb",
  "ab",
  "bb",
  "db",
  "eb",
  "gb",
];
const TONEMAP = {
  M: 2,
  m: 1,
  A: 3,
};

export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
    this.notes = USEFLATS.includes(this.tonic) ? FLATS : SHARPS;
    this.startNote = this.tonic[0].toUpperCase() + this.tonic.slice(1);
    this.startIndex = this.notes.indexOf(this.startNote);
  }

  chromatic() {
    return [
      ...this.notes.slice(this.startIndex),
      ...this.notes.slice(0, this.startIndex),
    ];
  }

  interval(intervals) {
    const tones = [...intervals].map((i) => TONEMAP[i]);
    const indexes = [0];
    for (let i = 0; i < tones.length - 1; i++) {
      indexes.push(indexes.slice(-1)[0] + Number(tones[i]));
    }
    return indexes.map((i) => this.chromatic()[i]);
  }
}
