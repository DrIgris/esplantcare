import AddButton from "./addButton";
import BugButton from "./bugButton";
import GitButton from "./gitButton";

export default function Home() {
  return (
    <div className="flex flex-row h-screen w-screen items-center justify-around bg-background">
      <div id="plant-div" className="flex flex-col border-1 rounded border-border w-20 h-20">

      </div>
      <div id="buttons-div" className="flex flex-col justify-between ">
        <AddButton />
        <BugButton />
        <GitButton />
      </div>
    </div>
  );
}
