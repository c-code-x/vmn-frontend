"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const sliderImageUrl = [
  //First image url
  {
    url: "https://vdc.gitam.edu/main_ui/images/home_imgs/Picture-3.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogLh7ulb913nPEWeMtLdv2P2IS-IB9Ya6ojxQDweqe0scmPsofBdp7WMR2a-RcbOUK_w&usqp=CAU?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
  },
  //Second image url
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2CW9W_xT9f_ylznozWUBZZQoWbkypFhj41Lkb-GAhF06zrDM1Iu2zLG921-aqvMEFMk&usqp=CAU",
  },
  //Third image url
  {
    url: "https://vdc.gitam.edu/main_ui/images/about_imgs/innovate/TeamTyrants.jpg",
  },

  //Fourth image url

  {
    url: "https://vdc.gitam.edu/main_ui/images/about_imgs/innovate/TeamHydrogravitricity3.jpg",
  },
];

const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style">
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div key={index} className="react-multi-carousel-arrow top-5">
              <div className="flex items-center justify-center mx-1 ">
                <Image
                  width={500}
                  height={250}
                  className="w-[500px] h-[250px] rounded-10"
                  src={imageUrl.url}
                  alt="hackathon"
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
