import { plant } from "@/types/plantItem";
import { PiPlantLight } from "react-icons/pi";

export default function PlantCard({plant}: {plant: plant}) {
    return (
    <div className="flex flex-row border-1 rounded m-2 border-border items-center">
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