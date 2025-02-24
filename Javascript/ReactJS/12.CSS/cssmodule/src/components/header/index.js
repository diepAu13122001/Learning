import styles from "./Header.module.css";


export default function Header() {
  return (
    <header>
      <h1>A heading here</h1>
      <p className={styles.p}>Posted by John Doe</p>
      <p>Some additional information here</p>
    </header>
  );
}
