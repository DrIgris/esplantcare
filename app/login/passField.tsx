'use client';

import { autoPlacement, autoUpdate, offset, useFloating } from '@floating-ui/react-dom';
import { useState } from 'react';

type props = {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    };

const criteria = [
    { id: 'upper',   label: 'One capital letter',            test: (v: string) => /[A-Z]/.test(v) },
    { id: 'num',     label: 'One number',                    test: (v: string) => /\d/.test(v) },
    { id: 'special', label: 'One special character (!@#$%&*)', test: (v: string) => /[!@#$%&*]/.test(v) },
    { id: 'len',     label: 'At least 8 characters',         test: (v: string) => v.length >= 8 },
    ]

export default function PassField({ password, setPassword}: props) {

    const [focused, setFocused] = useState(false)
    const {refs, floatingStyles} = useFloating({
        whileElementsMounted: autoUpdate,
        middleware: [offset(8), autoPlacement({allowedPlacements: ['bottom', 'left']},)],
    });


    return(
        <div id='passfield' className='flex flex-col'>
            <label className="font-body text-text-secondary mt-4">
            Password
            </label>
            <input type="password" ref={refs.setReference} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" className="text-text-secondary  pt-1 pb-2 px-2 align-middle font-body border-2 border-border bg-panel rounded-lg" />
            {focused && (
            <div className='border-2 border-border rounded-2xl bg-panel px-1' style={floatingStyles} ref={refs.setFloating}>
                {criteria.map(({ id, label, test }) => {
                    const passed = test(password)
                    return (
                    <div key={id} className="flex items-center gap-2 py-1">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${passed ? 'bg-button-primary' : 'bg-opacit-text'}`} />
                        <span className={`font-body text-xs font-medium ${passed ? 'text-button-primary' : 'text-opacit-text'}`}>
                        {label}
                        </span>
                    </div>
                    )
                })}
            </div>
            )}
        </div>
    );
}