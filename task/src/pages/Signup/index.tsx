import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import  auth from '../../../firebase'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();  // Initialize useRouter hook

    const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(userCredential.user);
            console.log('Account created successfully and verification email sent.');

            // Redirect to signin page after successful signup
            router.push('/Signin');
        } catch (err: any) {
            console.error("Error creating account:", err);
            setError(err.message);
        }
    };

    return (
        <div>
            <div className="bg-white min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSignup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">
                                    Signup
                                </button>
                            </div>
                        </form>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;