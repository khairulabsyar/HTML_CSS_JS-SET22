const bmiCalc = function (weight, height) {
  return (weight / Math.pow(height / 100, 2)).toFixed(2);
};

const bmiResult = function (weight, height) {
  let bmi = bmiCalc(weight, height);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

const bmiReport = function (bmi, age) {
  if (age < 40) {
    if (bmi == "Normal") {
      return "You are healthy, congrats!";
    } else if (bmi == "Overweight" || bmi == "Obese") {
      return "You still have time to take care of your body";
    } else {
      return "Please eat more to achieve normal BMI";
    }
  } else {
    if (bmi == "Normal") {
      return "You are healthy, congrats!";
    } else if (bmi == "Overweight" || bmi == "Obese") {
      return "Please take care of your body before it is too late";
    } else {
      return "Please eat more to achieve normal BMI";
    }
  }
};
export { bmiResult, bmiReport };
