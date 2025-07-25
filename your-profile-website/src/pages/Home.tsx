import Section from "../components/Section";
import styles from './home.module.css';

export default function Home(){
  return (
    <>
      <Section>
        <div className={styles.pageContainer}>
          <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Helcome to your profile website</h1>
            <button className={styles.getStartedButton}>Get Started</button>
          </div>
        </div>
      </Section>
    </>
  )
}