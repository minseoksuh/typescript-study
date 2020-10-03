// Function inference do not infer parameters so always type them.
const add = (a: number, b: number): number => {
  return a + b;
};

// Always define return type for functions.
// Do not rely on function inference
const subtract = (a: number, b: number) => {
  a - b;
};

const subtractCorrect = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);

  //   return null;
  //   return undefined;
};

// A function returning 'never' cannot have a reachable end point.
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
