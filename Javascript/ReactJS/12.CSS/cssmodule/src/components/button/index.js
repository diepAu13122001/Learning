import clsx from "clsx";
import styles from "./Button.module.css";
export default function Button({ primary, text }) {
  const classes = clsx(styles.btn, 'm-10', 'py-10', 'px-15', {
    [styles.primary]: primary,
  });
  return (
    <button type="button" className={classes}>
      {text}
    </button>
  );
}
