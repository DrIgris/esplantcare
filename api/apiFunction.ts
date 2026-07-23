import { plant } from "@/types/plantItem";
import { createPlant } from "./dbFunctions";

export async function addPlant(plant : plant) {
    createPlant({userId: "test", espId: plant.espID, name: plant.name, type: plant.type, soil: plant.soil, pot: plant.pot})
}