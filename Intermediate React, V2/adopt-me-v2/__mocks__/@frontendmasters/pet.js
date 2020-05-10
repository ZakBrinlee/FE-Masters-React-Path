import { readFileSync } from "fs";
import path from "path";
import { act } from "@testing-library/react";

const breeds = [
  { name: "Bichon Frise" },
  { name: "Bolognese" },
  { name: "Bolonka" },
  { name: "Coton de Tulear" },
  { name: "Havanese" },
  { name: "Lowchen" },
  { name: "Maltese" }
];

const doggos = JSON.parse(
  // This makes sure the file gets read from the correct directory
  readFileSync(path.join(__dirname, "/res.json")).toString()
);

export const ANIMALS = ["dog", "cat", "bird"];
// Underscore used to signal that it is only used for testing, not general consumption
export const _breeds = breeds;
export const _dogs = doggos.animals;

// Creating a mock library of pet
const mock = {
  // Breeds is a spy function
  breeds: jest.fn(() => {
    // It will return a promise like object
    return {
      // Act() - tells react that something has been done and it should react to it
      then: callback => 
        act(() => {
        callback({
          breeds
        });
      })
    };
  }),
  animals: jest.fn(() => {
    return {
      then: callback =>
        act(() => {
          callback(doggos);
        })
    };
  })
};

export default mock;