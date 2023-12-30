import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1337,
    name: "Fido",
    animal: "dog",
    breed: "mixed",
    images: [],
    city: "San Francisco",
    state: "CA",
    description: "A dog named Fido",
  },
  () => {},
]);

export default AdoptedPetContext;
