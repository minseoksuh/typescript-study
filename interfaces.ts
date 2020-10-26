// Interfaces: creates a new type, describing the property
// names and value types of an object

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  extra: "yes",
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
