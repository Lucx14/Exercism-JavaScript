"use strict";

export const meetup = (year, month, descriptor, day) => {
  const teen = (num) => num > 12 && num < 20;
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const DATE_MAP = {
    first: 0,
    second: 1,
    third: 2,
    fourth: 3,
  };
  const daysInMonth = new Date(year, month, 0).getDate();
  const dates = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month - 1, i);
    if (DAYS[date.getDay()] === day) dates.push(date.getDate());
  }

  const position =
    (descriptor === "teenth" && dates.findIndex((date) => teen(date))) ||
    (descriptor === "last" && dates.length - 1) ||
    DATE_MAP[descriptor];

  return new Date(year, month - 1, dates[position]);
};
