const result = function (age) {
  if (age < 20) {
    return "lightgreen";
  } else if (age >= 20 && age < 30) {
    return "lightsalmon";
  } else if (age >= 30 && age < 40) {
    return "lightslightseagreenalmon";
  } else {
    return "lightgrey";
  }
};

export default result;
