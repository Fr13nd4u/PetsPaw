"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import styles from "./id-page.module.css";

interface ICarousel {
  breeds: any;
}

const CatCarousel: React.FC<ICarousel> = ({ breeds }) => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <>
      <Slider {...settings} className={styles.cat_slider}>
        {breeds.map((cat: any) => (
          <div key={cat.id}>
            <Image
              src={cat.url}
              alt={cat.breeds[0].name}
              width={cat.width}
              height={cat.height}
              className={styles.cat_img}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CatCarousel;
