import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const SignUp = () => {
    useTitle('Sign Up');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUser, emailVerification, signInProvider } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // Handle Sign Up
    const handleSignUp = data => {
        setSignUpError('');
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // Update User
                const userInfo = {
                    displayName: data.name
                };
                updateUser(userInfo)
                    .then(() => {
                        saveUserToDB(data?.name, data?.email)
                    })
                    .catch(error => console.error(error.message))
                console.log(user);
                reset();
                // Email Verification
                handleEmailVerification();
                if (user.emailVerified) {
                    toast.success('Sign Up Successfull');
                    navigate(from, { replace: true });
                }
            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message);
            })
    };

    // Handle Email Verification
    const handleEmailVerification = () => {
        emailVerification()
            .then(() => {
                toast.success('Verification Email Sent');
            })
            .catch(error => console.error(error))
    }

    // Handle Other Sign Up
    const handleOtherSignUp = provider => {
        signInProvider(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUserToDB(user?.displayName, user?.email);
                toast.success('Sign Up Successfull');
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    };

    // Post User To Database
    const saveUserToDB = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    };

    return (
        <div className='px-6 py-6 sm:py-12 rounded-lg sm:shadow-xl max-w-md mx-auto sm:my-16 lg:my-24'>
            <h2 className='text-2xl text-center'>Sign Up</h2>
            {/* Form */}
            <form onSubmit={handleSubmit(handleSignUp)}>
                {/* Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" {...register('name', { required: "Name field mustn't be empty" })} />
                    {errors?.name && <span className='text-xs text-error mt-1'>{errors?.name?.message}</span>}
                </div>
                {/* Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" className="input input-bordered" {...register('email', { required: "Email field mustn't be empty" })} />
                    {errors?.email && <span className='text-xs text-error mt-1'>{errors?.email?.message}</span>}
                </div>
                {/* Password */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" className="input input-bordered" {...register('password', { required: "Password field mustn't be empty", minLength: { value: 6, message: 'Password must be 6 characters or longer' }, pattern: { value: /(?=.*[a-z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" } })} />
                    {errors?.password && <span className='text-xs text-error mt-1'>{errors?.password?.message}</span>}
                </div>
                {/* Sign Up Error */}
                <p className="text-xs mt-1 text-error">{signUpError}</p>
                {/* Submit */}
                <div className="form-control mt-6">
                    <button className="btn btn-accent text-white text-lg font-normal">Sign Up</button>
                </div>
                {/* Sign In Link */}
                <div className='text-center mt-3'>
                    <span>Already Have An Account?</span>
                    <Link to='/signin' className='text-secondary link link-hover ml-1'>Sign In</Link>
                </div>
                {/* Divider */}
                <div className="divider text-lg sm:my-8">OR</div>
                {/* Google Sign Up */}
                <div className="form-control mt-6">
                    <button onClick={() => handleOtherSignUp(googleProvider)} className="btn btn-accent btn-outline text-white text-lg font-normal">Continue With Google</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;