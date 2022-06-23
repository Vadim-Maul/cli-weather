import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(`${chalk.bgRed(" ERROR ")}  ${error}`);
};

const printSucces = (msg) => {
  console.log(`${chalk.bgGreen(" SUCCES ")}  ${msg}`);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(" HELP ")} 
		 Without parametrs - print the weather
		 -s [CITY] for installation a city
		 -h for print help
		 -t [API KEY] save token
		 `
  );
};

export { printError, printSucces, printHelp };
