"use strict";

export const hey = (message) => {
  const letters = [...message].filter((char) => /[a-zA-Z]/.test(char));
  const isQuestion = message.trim().slice(-1) === "?";
  const allCaps =
    letters.length > 0 && letters.every((char) => /[A-Z]/.test(char));
  const noMessage = message.trim() === "";

  if (isQuestion && allCaps) return "Calm down, I know what I'm doing!";
  if (isQuestion) return "Sure.";
  if (allCaps) return "Whoa, chill out!";
  if (noMessage) return "Fine. Be that way!";
  return "Whatever.";
};
