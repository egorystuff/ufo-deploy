import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ResultsSwiperSlide from "@components/Site/ResultsSwiperSlide.jsx";
import user1 from './site-images/user1.png';
import user2 from './site-images/user2.png';
import ResultSwiperSlideMobile from "@components/Site/ResultSwiperSlideMobile.jsx";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const ResultsSwiper = () => {
    const data = [
        {
            name: 'James',
            lbs: '- 30 lbs',
            description: '“If you’re honest with what you put in, you’ll get feedback from the app that I feel has been super helpful”',
            image: user1
        },
        {
            name: 'Teresa',
            lbs: '- 10 lbs',
            description: '“If you’re honest with what you put in, you’ll get feedback from the app that I feel has been super helpful”',
            image: user2
        },
        {
            name: 'James',
            lbs: '- 30 lbs',
            description: '“If you’re honest with what you put in, you’ll get feedback from the app that I feel has been super helpful”',
            image: user1
        },
        {
            name: 'Teresa',
            lbs: '- 10 lbs',
            description: '“If you’re honest with what you put in, you’ll get feedback from the app that I feel has been super helpful”',
            image: user2
        },
        {
            name: 'James',
            lbs: '- 30 lbs',
            description: '“If you’re honest with what you put in, you’ll get feedback from the app that I feel has been super helpful”',
            image: user1
        },
        {
            name: 'Teresa',
            lbs: '- 10 lbs',
            description: '“If you’re honest with what you put in, you’ll get feedback from the app that I feel has been super helpful”',
            image: user2
        },
    ];

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 640);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {isDesktop ? (
                <Swiper
                    spaceBetween={16}
                    slidesPerView={1}
                    centeredSlides={true}
                    style={{ width: '100%', height: '480px' }}
                    loop={true}
                    className='res-swiper-container'
                    breakpoints={{
                        850: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ResultsSwiperSlide data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={16}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    style={{ width: '100%', height: '620px' }}
                    loop={true}
                    className='res-swiper-container-mobile'
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ResultSwiperSlideMobile data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    );
};

export default ResultsSwiper;
