import { plant } from "@/types/plantItem";
import AddButton from "./addButton";
import BugButton from "./bugButton";
import GitButton from "./gitButton";
import PlantCard from "./plantCard";

export default function Home() {

  const plants: plant[] = [
    {id: "1", espID: "1", name: "Plant 1", moisturePerc: 100, lastTimeMeasured: new Date("2026-02-23T03:24:00")},
    {id: "2", espID: "2", name: "Plant 2", moisturePerc: 70, lastTimeMeasured: new Date("2026-02-23T03:24:00")},
    {id: "3", espID: "3", name: "Plant 3", moisturePerc: 45, lastTimeMeasured: new Date("2026-02-23T03:24:00")},
    {id: "4", espID: "4", name: "Plant 4", moisturePerc: 15, lastTimeMeasured: new Date("2026-02-23T03:24:00")},
  ];


  return (
    <div className="flex flex-row h-screen w-screen items-center justify-around bg-background">
      <div id="plant-div" className="flex flex-col border-1 rounded border-border overflow-scroll h-1/2 w-fit p-3">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant}/>
        ))}
      </div>
      <div id="buttons-div" className="flex flex-col items-center w-fit h-1/2 justify-evenly">
        <AddButton />
        <BugButton />
        <GitButton />
      </div>
    </div>
  );
}
