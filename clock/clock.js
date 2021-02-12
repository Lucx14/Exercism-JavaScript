"use strict";

const MINS_PER_HOUR = 60;
const HRS_IN_DAY = 24;
const formatTimeUnit = (unit) => {
  return unit.toString().padStart(2, 0);
};

export class Clock {
  constructor(hour = 0, minute = 0) {
    this.minute = minute;
    this.hour = hour;
  }

  toClockHands() {
    const absMins = Math.abs(this.minute % MINS_PER_HOUR);
    const quot = Math.floor(this.minute / MINS_PER_HOUR);

    const clockMins =
      this.minute >= 0 ? absMins : (MINS_PER_HOUR - absMins) % MINS_PER_HOUR;

    const clockHours =
      (HRS_IN_DAY + ((this.hour + quot) % HRS_IN_DAY)) % HRS_IN_DAY;

    return { hour: clockHours, min: clockMins };
  }

  toString() {
    const { hour, min } = this.toClockHands();
    const formattedHour = formatTimeUnit(hour);
    const formattedMin = formatTimeUnit(min);
    return formattedHour + ":" + formattedMin;
  }

  plus(minutes) {
    this.minute += minutes;
    return this;
  }

  minus(minutes) {
    this.minute -= minutes;
    return this;
  }

  equals(other) {
    return (
      other.toClockHands().hour === this.toClockHands().hour &&
      other.toClockHands().min === this.toClockHands().min
    );
  }
}
