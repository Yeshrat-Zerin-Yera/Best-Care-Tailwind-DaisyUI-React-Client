import React from 'react';

const InfoCard = ({ card }) => {
    const { title, content, icon, bgClass } = card;

    return (
        <div className={`card md:card-side bg-base-100 shadow-xl ${bgClass} p-6`}>
            <figure><img src={icon} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default InfoCard;