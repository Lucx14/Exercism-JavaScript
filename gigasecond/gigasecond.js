const MS = 1e12;

export const gigasecond = (date) => {
  return new Date(date.getTime() + MS);
};
