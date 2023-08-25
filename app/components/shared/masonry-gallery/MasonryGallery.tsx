import React from "react";
import styles from "./masonry-gallery.module.css"; // Import your CSS file

interface IMasonryGallery {
  children?: React.ReactNode | React.ReactNode[];
}

const gridMapping = [
  "1 / 1 / 3 / 2",
  "1 / 2 / 2 / 3",
  "1 / 3 / 2 / 4",
  "2 / 2 / 4 / 4",
  "3 / 1 / 4 / 2",
  "4 / 1 / 5 / 2",
  "4 / 2 / 5 / 3",
  "4 / 3 / 6 / 4",
  "5 / 1 / 7 / 3",
  "6 / 3 / 7 / 4",
  "7 / 3 / 8 / 4",
  "7 / 2 / 8 / 3",
  "7 / 1 / 9 / 2",
  "8 / 2 / 10 / 4",
  "9 / 1 / 10 / 2",
];

const generateGridArea = (index: number) => {
  const adjustedIndex = (index - 1) % gridMapping.length;
  return gridMapping[adjustedIndex];
};

const MasonryGallery: React.FC<IMasonryGallery> = ({ children }) => {
  const itemCount = React.Children.count(children);
  const blocks = Math.ceil(itemCount / gridMapping.length);

  // Calculate the grid template rows based on the number of items
  console.log((itemCount / 5) % 3);

  let gridTemplateRows: string;
  if ((itemCount / 5) % 3 === 1) {
    gridTemplateRows = "repeat(3, 1fr)";
  } else if ((itemCount / 5) % 3 === 2) {
    gridTemplateRows = "repeat(6, 1fr)";
  } else if ((itemCount / 5) % 3 === 0) {
    gridTemplateRows = "repeat(9, 1fr)";
  } else {
    gridTemplateRows = "repeat(9, 1fr)";
  }

  const renderItems = (start: number, end: number) =>
    React.Children.toArray(children)
      .slice(start, end)
      .map((child, index) => (
        <div
          key={index + start}
          className={styles.item}
          style={{ gridArea: generateGridArea(index + start + 1) }}
        >
          {child}
        </div>
      ));

  return (
    <>
      {Array.from({ length: blocks }, (_, blockIndex) => (
        <div
          key={blockIndex}
          className={styles.parent}
          style={{ gridTemplateRows }}
        >
          {renderItems(
            blockIndex * gridMapping.length,
            (blockIndex + 1) * gridMapping.length
          )}
        </div>
      ))}
    </>
  );
};

export default MasonryGallery;
