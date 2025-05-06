import React from 'react';
import {Avatar} from "@mui/material";

const ResultSwiperSlideMobile = ({data}) => {
    return (
        <div className='result-swiper-slide-mobile-container'>
            <div className="image-container">
                <img src={data.image} alt="customer-photo"/>
                <div className="description">
                    <p>{data.description}</p>
                </div>
            </div>
            <div className="info-container">
                <div className="user-info">
                    <Avatar src={data.image}
                            alt="customer-avatar"
                            sx={{width: 28, height: 28}}
                    />
                    <p className="name">{data.name}</p>
                </div>
                <p className="lbs">{data.lbs}</p>
            </div>
            <a href="#">Start your journey</a>
        </div>
    );
};

export default ResultSwiperSlideMobile;