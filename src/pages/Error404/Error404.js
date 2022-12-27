import React from 'react';
import NotFoundGIF from '../../assets/images/not-found-cute-cat.gif';

const Error404 = () => {
    return (
        <div className='h-[80vh] flex flex-col items-center justify-center'>
            <img src={NotFoundGIF} alt="" />
            <h1 className='text-4xl font-bold mt-6'>Oops!</h1>
            <p className='my-6'>Sorry, an unexpected error has occoured.</p>
            <i>Not Found</i>
        </div>
    );
};

export default Error404;