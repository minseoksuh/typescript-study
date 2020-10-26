// array inference
const carMakers = ["ford", "tayota", "chevy"];

const carMakers2: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camero"]];

// Help with inference when extracting values
const carMaker = carMakers[0];
const carMaker2 = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car): string => {
  return car.toLowerCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2020-10-10"];
importantDates.push(new Date());
importantDates.push(1000);
importantDates.push("2030-10-10");
