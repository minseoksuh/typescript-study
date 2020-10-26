// Tuple: Array-like structure where each element represents some property of a record.

const drink = { color: "brown", carbonated: true, suger: 40 };

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
// pepsi[0] = 40;
// pepsi[2] = true;

const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

// When using csv file

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};

// it is difficult to understand the meaning with tuple
