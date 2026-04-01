'use client';

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { autoPlacement, autoUpdate, offset, useFloating } from '@floating-ui/react-dom';

export default function LoginForm() {

    const router = useRouter();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [focused, setFocused] = useState(false)
    const {refs, floatingStyles} = useFloating({
        whileElementsMounted: autoUpdate,
        middleware: [offset(8), autoPlacement({allowedPlacements: ['bottom', 'left']},)],
    });

    const criteria = [
    { id: 'upper',   label: 'One capital letter',            test: (v: string) => /[A-Z]/.test(v) },
    { id: 'num',     label: 'One number',                    test: (v: string) => /\d/.test(v) },
    { id: 'special', label: 'One special character (!@#$%&*)', test: (v: string) => /[!@#$%&*]/.test(v) },
    { id: 'len',     label: 'At least 8 characters',         test: (v: string) => v.length >= 8 },
    ]

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailPattern = /\w+@\w+\.\w+/;
        if (!emailPattern.test(email)) {
            console.error('Invalid email format');
            return;
        }
        
        //auth
        router.push('/home');
    }


    return (
        
            
            <form className='relative' onSubmit={handleSubmit}>
                <div id='fields' className="flex flex-col">
                    <label className="font-body text-text-secondary">
                    Email
                    </label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="example@gmail.com" className="text-text-secondary pt-1 pb-2 px-2 align-middle font-body border-2 border-border bg-panel rounded-lg" />                        
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
                            <button type="submit" className="bg-button-primary border-3 w-fit font-body font-light text-2xl px-6  py-0.5 mt-30 lg:mt-6 text-special-panel border-button-secondary rounded-xl transform hover:bg-text-title active:translate-y-1 active:translate-x-1">Log In</button>
                        </div>
                </div>
            </form>
            );
}