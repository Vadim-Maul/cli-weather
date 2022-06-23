import { bgRed, bgGreen } from "chalk";

const printError = (error) => {
  console.log(bgRed(" ERROR ") + " " + error);
};

const printSucces = (msg) => {
  console.log(bgGreen(" SUCCES ") + " " + msg);
};

export { printError, printSucces };
