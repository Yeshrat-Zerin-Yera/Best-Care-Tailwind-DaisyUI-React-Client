import React from 'react';

const OurServicesCard = ({ ourService }) => {
    const { title, content, img } = ourService;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl p-6">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body text-center">
                <h2 className="text-[20px] font-semibold text-center">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default OurServicesCard;