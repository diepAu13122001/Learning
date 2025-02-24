import Button from "../button";
import styles from "./Content.module.scss";

export default function Content() {
  return (
    <main>
      <h1>A Main here</h1>
      <p className={styles.p}>Posted by John Doe</p>
      <p>Some additional information here</p>
      <Button primary text="Hold me!" />
      <Button text="Click me!" />
    </main>
  );
}
