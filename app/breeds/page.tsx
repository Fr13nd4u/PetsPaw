import React from "react";
import MasonryGallery from "../components/shared/masonry-gallery/MasonryGallery";

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

const Breeds: React.FC = () => {
  return (
    <div>
      <h2>Breeds</h2>
      <MasonryGallery>
        {arr.map((item, index) => (
          <div key={index}>item: {item}</div>
        ))}
      </MasonryGallery>
    </div>
  );
};

export default Breeds;
