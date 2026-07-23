'use client'

import { plant } from "@/types/plantItem";
import AddButton from "./addButton";
import BugButton from "./bugButton";
import GitButton from "./gitButton";
import PlantCard from "./plantCard";
import AddModal from "./addModal";
import { useState } from "react";
import { generateUUID } from "@/api/plantFunctions";


export default function Home() {

  const [addVisible, setAddVisible] = useState(false);
  const [uuid, setUuid] = useState("");

  return (
    <div className="flex lg:flex-row lg:mt-0 flex-col overflow-scroll mt-5 h-screen w-screen items-center justify-evenly lg:justify-around bg-background">
      <div id="plant-div" className="flex flex-col border-1 rounded border-border overflow-scroll h-1/2 w-fit p-3">
        {/* {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} onClick={addVisible ? setUuid : setInfoVisisble}/>
        ))} */}
      </div>
      <div onClick={() => setUuid(generateUUID())} className={addVisible ? "w-fit p-4 h-1/2 bg-panel border-1 lg:mt-0 mt-8 rounded border-border" : "hidden"}>
        <AddModal setVisible={setAddVisible} uuid={uuid}/>
      </div>
      <div id="buttons-div" className="flex flex-col items-center w-fit h-1/2 justify-evenly">
        <AddButton setVisible={setAddVisible} />
        <BugButton />
        <GitButton />
      </div>
    </div>
  );
}
