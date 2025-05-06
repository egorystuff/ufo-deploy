import React from 'react';
import {Avatar} from "@mui/material";

const ResultsSwiperSlide = ({data}) => {
    return (
        <div className='result-wrapper'>
            <div className="image-container">
                <img src={data.image} alt="customer-photo"/>
            </div>
            <div className="info-container">
                <div className="user-info">
                    <Avatar src={data.image}
                            alt="customer-avatar"
                            sx={{ width: 56, height: 56 }}
                    />
                    <p className="name">{data.name}</p>
                </div>
                <div className="user-comment">
                    <p>{data.lbs}</p>
                    <span>{data.description}</span>
                </div>
            </div>
        </div>
    );
};

export default ResultsSwiperSlide;