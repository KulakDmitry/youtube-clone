import * as numeral from "numeral";

const convertCount = (str) => {
  let num;

  if (parseInt(str) > 1000) {
    num = numeral(str).format("0a").toUpperCase();
  } else {
    num = parseInt(str);
  }

  if (parseInt(str) > 1000000) {
    num = numeral(str).format("0.0a").toUpperCase();
  }

  return num;
};

export { convertCount };
