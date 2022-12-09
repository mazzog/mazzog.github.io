// components/main-header.js

import styles from "../styles/main-header.module.css"
import Image from "next/image";
import profilePicture from "../public/Profile.jpg"

export default function MainHeader() {
    return (
        <header className={styles.header}>
            <Image className={styles.image} src={profilePicture} alt={"A profile picture."} width={150} heigth={150}/>
            <span className={styles.text}>mazzog &lt;/&gt;</span>
        </header>
    )
}