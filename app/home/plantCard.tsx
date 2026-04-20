import { plant } from "@/types/plantItem";
import { PiPlantLight } from "react-icons/pi";
import clsx from "clsx";

export default function PlantCard({plant}: {plant: plant}) {
    return (
    <div className={clsx("flex flex-row border-2 rounded m-2 items-center px-4", {
        "bg-moisture-wet border-moisture-wet-b" : plant.moisturePerc >= 90,
        "bg-moisture-optimal border-moisture-optimal-b" : plant.moisturePerc < 90 && plant.moisturePerc > 50,
        "bg-moisture-dry border-moisture-dry-b" : plant.moisturePerc < 50 && plant.moisturePerc > 25,
        "bg-moisture-danger border-moisture-danger-b" : plant.moisturePerc < 25,
    })}>
        <PiPlantLight size="2em"/>
        <div className="flex flex-col ml-2 mr-2">
            <div className="flex flex-row items-center justify-between">
                <span className="font-heading text-2xl font-medium text-text-primary">{plant.name}</span>
                <span className="text-text-primary font-body">{plant.moisturePerc}%</span> 
            </div>
            <span className="text-text-primary font-body">{plant.lastTimeMeasured.toLocaleString()}</span>
        </div>
    </div>);
}