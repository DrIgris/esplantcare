'use client';

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';
import PassField from './passField';
import { error } from 'console';

export default function LoginForm() {

    const router = useRouter();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState(false);

    useEffect(() => {
        if (!loginError) return;

        const timer = setTimeout(() => {
            setLoginError(false);
        }, 3000);

        return () => clearTimeout(timer);
        }, [loginError]);

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailPattern = /\w+@\w+\.\w+/;
        if (!emailPattern.test(email)) {
            console.error('Invalid email format');
            setLoginError(true);
            return;
        }
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{8,}$/;
        if (!passwordPattern.test(password)) {
            console.error('Invalid password format');
            setLoginError(true);
            return;
        }
        router.push('/home');
    }


    return (
        
            
        <form className='relative' onSubmit={handleSubmit} >
            <div id='fields' className="flex flex-col pb-5">
                
                <label className="font-body text-text-secondary">
                Email
                </label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="example@gmail.com" className="text-text-secondary pt-1 pb-2 px-2 align-middle font-body border-2 border-border bg-panel rounded-lg" />                        
                <PassField password={password} setPassword={setPassword} />
                
            </div>
            
            {loginError && (<div className='border-2 border-moisture-danger-b rounded-md bg-moisture-danger px-2'>
                <span className='text-sm text-center text-text-important'>Invalid email or password format.</span>
            </div>)}
            
            <button type="submit" className="bg-button-primary border-3 w-fit font-body font-light text-2xl px-6  py-0.5 mt-30 lg:mt-6 text-special-panel border-button-secondary rounded-xl transform hover:bg-text-title active:translate-y-1 active:translate-x-1">Log In</button>
        </form>
        );
}