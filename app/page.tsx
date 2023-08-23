import Image from "next/image";
import home_img from "./assets/home.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Image src={home_img} alt="home image" />
    </div>
  );
}
