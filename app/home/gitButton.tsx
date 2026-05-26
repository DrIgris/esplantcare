'use client'

import { permanentRedirect } from "next/navigation";


export default function GitButton() {

  async function onClick() {
    permanentRedirect('https://github.com/DrIgris/esplantcare');
  }

  return (
    <button onClick={onClick} className="bg-button-git w-fit p-2 border-2 font-body border-git-border text-2xl text-text-git rounded transform hover:bg-git-border hover:text-button-git active:translate-y-1 active:translate-x-1">Github</button>
  );
}
