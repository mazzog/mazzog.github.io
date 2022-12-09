// components/layout.js

import styles from "../styles/layout.module.css"

export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <main>{children}</main>
        </div>
    )
}