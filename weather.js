#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printHelp, printError, printSucces } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token is missing");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSucces("Token saved");
  } catch (e) {
    printError(e.msg);
  }
};

const getForcast = async () => {
  try {
    const weather = await getWeather("moscow");
    console.log(weather);
  } catch (e) {
    if (e?.response?.status == 404) {
      printError("city specified incorrectly");
    } else if (e?.response?.status == 401) {
      printError("token specified incorrectly");
    } else {
      printError(e.msg);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getForcast();
};

initCLI();
