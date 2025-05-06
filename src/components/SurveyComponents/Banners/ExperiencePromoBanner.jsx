import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import img1 from "../../Site/site-images/expirienceBanner1.png";
import img2 from "../../Site/site-images/expirienceBanner2.png";
import img3 from "../../Site/site-images/expirienceBanner3.png";
import img4 from "../../Site/site-images/expirienceBanner4.png";
import img5 from "../../Site/site-images/expirienceBanner5.png";

export const ExperiencePromoBanner = ({ onClose }) => {
  const data = [
    { id: 1, image: img1, title: "Our weight loss program is based on behavior change" },
    { id: 2, image: img2, title: "Change your relationship with food in only 10 minutes a day" },
    { id: 3, image: img3, title: "The best part? You can still eat your favorite foods. Nothing is off limits!" },
    { id: 4, image: img4, title: "We help you track green, yellow, and orange foods based on caloric density" },
    { id: 5, image: img5, title: "Don’t worry if you mess up. We will be there every step of the way" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [dots, setDots] = useState("");

  const [animationParent] = useAutoAnimate({ duration: 300, easing: "ease-in-out" });

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 3000);

    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    const timer = setTimeout(() => {
      clearInterval(slideInterval);
      clearInterval(dotInterval);
      onClose?.();
    }, 15000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(dotInterval);
      clearTimeout(timer);
    };
  }, [data.length, onClose]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "24px 0" }}>
        <Typography
          variant='h2'
          sx={{
            color: "#241063",
            fontSize: "24px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "30px",
          }}>
          <svg xmlns='http://www.w3.org/2000/svg' width='27' height='26' viewBox='0 0 27 26' fill='none'>
            <path
              d='M15.7883 3.79988C14.6818 1.72527 11.7082 1.72527 10.6018 3.79988L1.68213 20.5243C0.935873 21.9236 1.45509 23.7119 3.07719 24.2042C5.07791 24.8114 8.40362 25.5 13.195 25.5C17.9864 25.5 21.3121 24.8114 23.3129 24.2042C24.935 23.7119 25.4542 21.9236 24.7079 20.5243L15.7883 3.79988Z'
              fill='#FF5C1D'
              stroke='#FF5C1D'
            />
          </svg>
          UFO
        </Typography>
      </Box>

      <Box
        ref={animationParent}
        className='banner-slide'
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
          height: "485px",
          marginBottom: "74px",
        }}>
        <Box
          key={currentSlide}
          sx={{
            maxWidth: "311px",
          }}>
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "24px",
              fontWeight: "500",
              lineHeight: "120%",
              marginBottom: "58px",
              textAlign: "center",
            }}>
            {data[currentSlide].title}
          </Typography>

          <Box>
            <img
              src={data[currentSlide].image}
              alt='banner-image'
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
            />
          </Box>
        </Box>
      </Box>

      <Typography
        variant='h6'
        sx={{
          color: "#241063",
          fontSize: "14px",
          fontWeight: "450",
          lineHeight: "150%",
          textAlign: "center",
        }}>
        Building a plan{dots}
      </Typography>
    </Box>
  );
};
