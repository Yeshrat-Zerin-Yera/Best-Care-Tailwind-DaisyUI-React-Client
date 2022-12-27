import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const SignIn = () => {
    useTitle('Sign In');
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { signIn, signInProvider, resetUserPassword } = useContext(AuthContext);
    const [signInError, setSignInError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // Handle Sign In
    const handleSignIn = data => {
        setSignInError('');
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset();
                if (user.emailVerified) {
                    toast.success('Sign In Successfull');
                    navigate(from, { replace: true });
                }
            })
            .catch(error => {
                console.error(error);
                setSignInError(error.message);
            })
    };

    // Handle Other Sign In
    const handleOtherSignIn = provider => {
        signInProvider(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Sign In Successfull');
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    };

    // Handle Reset User Password
    const handleResetUserPassword = () => {
        const userEmail = watch().email;
        resetUserPassword(userEmail)
            .then(() => {
                toast.success('Password Reset Email Sent');
            })
            .catch(error => {
                console.error(error);
                setSignInError(error.message);
            });
    };

    return (
        <div className='px-6 py-6 sm:py-12 rounded-lg sm:shadow-xl max-w-md mx-auto sm:my-16 lg:my-24'>
            <h2 className='text-2xl text-center'>Sign In</h2>
            {/* Form */}
            <form onSubmit={handleSubmit(handleSignIn)}>
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
                    <input type="password" placeholder="Password" className="input input-bordered" {...register('password', { required: "Password field mustn't be empty" })} />
                    <div className='flex justify-between'>
                        {errors?.password && <span className='text-xs text-error mt-1'>{errors?.password?.message}</span>}
                        <label className="label">
                            <Link onClick={handleResetUserPassword} className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                </div>
                {/* Sign In Error */}
                <p className='text-xs mt-1 text-error'>{signInError}</p>
                {/* Submit */}
                <div className="form-control mt-6">
                    <button className="btn btn-accent text-white text-lg font-normal">Sign In</button>
                </div>
                {/* Sign In Link */}
                <div className='text-center mt-3'>
                    <span>New To Best Care?</span>
                    <Link to='/signup' className='text-secondary link link-hover ml-1'>Sign Up</Link>
                </div>
                {/* Divider */}
                <div className="divider text-lg sm:my-8">OR</div>
                {/* Google Sign In */}
                <div className="form-control mt-6">
                    <button onClick={() => handleOtherSignIn(googleProvider)} className="btn btn-accent btn-outline text-white text-lg font-normal">Continue With Google</button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;