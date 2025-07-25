import type { Props } from "../types/Props";
import styles from "./section.module.css"

export default function Section({children}: Props){
  return (
    <section className={styles.section}>
      {children}
    </section>
  )
}