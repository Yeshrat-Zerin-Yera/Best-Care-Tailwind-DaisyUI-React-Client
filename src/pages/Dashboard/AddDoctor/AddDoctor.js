import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    // Use Title
    useTitle('Add Doctor');
    // Use Form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // Navigate
    const navigate = useNavigate();

    // Get Specialties From Database
    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['doctorspecialties'],
        queryFn: () => fetch('https://best-care-server.vercel.app/doctorspecialties')
            .then(res => res.json())
    });

    // Loading
    if (isLoading) {
        return <Loading></Loading>
    }

    // Handle Add Doctor
    const handleAddDoctor = data => {
        // Post Image To Database
        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img);
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imagebb_key}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // Post Doctor To Database
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: imgData.data.url
                    }
                    fetch('https://best-care-server.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(doctorData => {
                            console.log(doctorData);
                            toast.success(`Doctor ${doctorData.name} Added Successfully`);
                            reset();
                            navigate('/dashboard/managedoctors');
                        })
                }
            })
    };

    return (
        <div>
            <h2 className="text-2xl mb-6">Add A New Doctor</h2>
            <div className='px-6 py-6 sm:py-12 rounded-lg sm:shadow-xl max-w-md bg-white'>
                {/* Form */}
                <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                    {/* Select Specialty */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select className="select select-bordered w-full" {...register('specialty')}>
                            {
                                specialties.map(specialty => <option key={specialty?._id}>{specialty?.name}</option>)
                            }
                        </select>
                    </div>
                    {/* Upload Photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Profile Picture</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full" {...register('img', { required: "Profile Picture Must Be Included" })} />
                        {errors?.img && <span className='text-xs text-error mt-1'>{errors?.img?.message}</span>}
                    </div>
                    {/* Submit */}
                    <div className="form-control mt-6">
                        <button className="btn btn-accent text-white text-lg font-normal">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;