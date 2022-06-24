import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(`${chalk.bgRed(" ERROR ")}  ${error}`);
};

const printSuccess = (msg) => {
  console.log(`${chalk.bgGreen(" SUCCESS ")}  ${msg}`);
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

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgYellow(" WEATHER ")} The Weather in ${res.name}
		${icon}  ${res.weather[0].description}
		Temp: ${res.main.temp} (feels like ${res.main.feels_like})
		Humidity: ${res.main.humidity}
		Wind Speed: ${res.wind.speed}
		 `
  );
};

export { printError, printSuccess, printHelp, printWeather };
