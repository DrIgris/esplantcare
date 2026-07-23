/* eslint-disable react-hooks/refs */
'use client'

import { useState } from "react";
import ModalButton from "./modalButton";
import { MdOutlineCancel } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";
import { plant } from "@/types/plantItem";
import { autoPlacement, autoUpdate, offset, useFloating } from '@floating-ui/react-dom';


export default function AddModal({ setVisible, uuid }: { setVisible: (v: boolean) => void, uuid: string}) {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [soil, setSoil] = useState('');
    const [pot, setPot] = useState('');

    const handleSubmit = () => {
       const data = {
            espid: uuid,
            name: name,
            type: type,
            soil: soil,
            pot: pot,
       };

    //    Call api
       setVisible(false);
    };

    const [focused, setFocused] = useState(false)
    const {refs, floatingStyles} = useFloating({
        whileElementsMounted: autoUpdate,
        middleware: [offset(8), autoPlacement({allowedPlacements: ['top']},)],
    });

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
                    <div className="flex flex-row">
                        <label className="mt-2 ml-2 text-xl">
                            ESP ID:
                        </label>
                        <div className="flex flex-row" ref={refs.setReference} onMouseEnter={() => setFocused(true)} onMouseLeave={() => setFocused(false)}>
                            <CiCircleInfo className="mt-4 ml-2"/>
                            <span className="mt-4 ml-1 text-xs text-opacit-text underline cursor-help">Two plants connected to the same ESP?</span>
                        </div>
                        <div className="border-2 border-border rounded-2xl bg-panel p-1 w-1/6" style={{...floatingStyles, visibility: focused ? 'visible' : 'hidden'}} ref={refs.setFloating}>
                            <span>Click on any of your plant cards to replace the current ESP ID</span>
                        </div>
                    </div>
                    
                    <input disabled type="text" value={uuid} className="m-4 text-text-secondary text-xl pt-1 pb-2 px-2 align-middle font-body border-2 border-border bg-panel-dark rounded"/>
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