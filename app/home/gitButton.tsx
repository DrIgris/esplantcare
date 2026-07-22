'use client'

import { permanentRedirect } from "next/navigation";


export default function GitButton() {

  async function onClick() {
    permanentRedirect('https://github.com/DrIgris/esplantcare');
  }

  return (
    <button onClick={onClick} className="cursor-pointer bg-button-git w-fit p-2 border-2 font-body border-git-border text-2xl text-background rounded transform hover:bg-git-border active:translate-y-1 active:translate-x-1">Github</button>
  );
}
