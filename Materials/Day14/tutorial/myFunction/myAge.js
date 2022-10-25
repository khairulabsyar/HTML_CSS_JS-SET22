export const myAge = (birthYear) => {
  const date = new Date();
  let thisYear = date.getFullYear();
  return thisYear - birthYear;
};

export const mySPMYear = (birthYear) => {
  const date = new Date();
  let thisYear = date.getFullYear();
  return birthYear + 17;
};
