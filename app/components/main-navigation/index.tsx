import React from "react";
import NavHeader from "./NavHeader";
import NavCard from "./NavCard";
import styles from "./navigation.module.css";

import voting_img from "../../assets/voting.png";
import breeds_img from "../../assets/breeds.png";
import gallery_img from "../../assets/gallery.png";

const MainNavigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <NavHeader />
      <div className={styles.nav_title}>
        <h2>Hi!👋</h2>
        <p>Welcome to MacPaw Bootcamp 2023</p>
      </div>

      <h3>Lets start using The Cat API</h3>

      <div className={styles.card_conteiner}>
        <NavCard
          href="/voting"
          title="voting"
          background="#B4B7FF"
          alt_src="voting"
          img_src={voting_img}
        />
        <NavCard
          href="/breeds"
          title="BREEDS"
          background="#97EAB9"
          alt_src="breeds"
          img_src={breeds_img}
        />
        <NavCard
          href="/gallery"
          title="GALLERY"
          background="#FFD280"
          alt_src="gallery"
          img_src={gallery_img}
        />
      </div>
    </nav>
  );
};

export default MainNavigation;
