const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
};

const ceasarCipher = (str, key) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += str[i];
    } else {
      result += String.fromCharCode(str.charCodeAt(i) + key);
    }
  }
  return result;
};

const analyzeArray = (arr) => {
  let obj = {
    average: arr.reduce((a, b) => a + b, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
  return obj;
};

export { capitalize, reverseString, calculator, ceasarCipher, analyzeArray };
