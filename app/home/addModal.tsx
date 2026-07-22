'use client'

import { useState } from "react";
import ModalButton from "./modalButton";
import { MdOutlineCancel } from "react-icons/md";
import { plant } from "@/types/plantItem";

export default function AddModal({ setVisible }: { setVisible: (v: boolean) => void}) {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [soil, setSoil] = useState('');
    const [pot, setPot] = useState('');

    const handleSubmit = () => {
       const data = {
            name: name,
            type: type,
            soil: soil,
            pot: pot,
       };

    //    Call api
       setVisible(false);
    };


    return (
        <div className="flex flex-col items-center justify-evenly h-full w-full font-body text-text-primary pl-1 pr-1">
            <div onClick={() => setVisible(false)} className="w-full mt-1 ml-0 cursor-pointer">
                <MdOutlineCancel className="text-cancel-button hover:text-cancel-button-hover"  size="1.5em"/>
            </div>
            <span className="text-text-title font-heading text-center text-4xl mt-0 mb-4">
                Add New Plant
            </span>
            <div className="flex flex-col overflow-y-scroll">
                <div className="flex flex-col">
                    <label className="mt-2 ml-2 text-xl">
                        ESP ID:
                    </label>
                    <input disabled type="text" value="TESTFORNOW" className="m-4 text-text-secondary text-xl pt-1 pb-2 px-2 align-middle font-body border-2 border-border bg-panel-dark rounded"/>
                </div>
                <div className="flex flex-col">
                    <label className="mt-2 ml-2 text-xl">
                        Plant Name:
                    </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} maxLength={16} className="m-4 mb-6 text-text-secondary text-xl pt-1 pb-2 px-2 align-middle font-body border-2 border-border bg-panel rounded"/>
                </div>
                <div className="flex flex-col">
                    <label className="mt-2 ml-2 text-xl">
                        Plant Type:
                    </label>
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} maxLength={16} className="m-4 mb-6 text-text-secondary text-xl pt-1 pb-2 px-2 align-middle font-body border-2 border-border bg-panel rounded"/>
                </div>
                <div className="flex flex-col">
                    <label className="mt-2 ml-2 text-xl">
                        Soil Type:
                    </label>
                    <input type="text" value={soil} onChange={(e) => setSoil(e.target.value)} maxLength={16} className="m-4 mb-6 text-text-secondary text-xl pt-1 pb-2 px-2 align-middle font-body border-2 border-border bg-panel rounded"/>
                </div>
                <div className="flex flex-col">
                    <label className="mt-2 ml-2 text-xl">
                        Pot Type:
                    </label>
                    <input type="text" value={pot} onChange={(e) => setPot(e.target.value)} maxLength={16} className="m-4 mb-6 text-text-secondary text-xl pt-1 pb-2 px-2 align-middle font-body border-2 border-border bg-panel rounded"/>
                </div>
            </div>
            
            <ModalButton onClick={handleSubmit}/>


            {/* ESP ID (automatic creation from db so no overlapping)*/}
            {/* Plant name */}
            {/* Plant Type */}
            {/* Soil Type */}
            {/* Pot Type */}
        
        </div>
    );
}