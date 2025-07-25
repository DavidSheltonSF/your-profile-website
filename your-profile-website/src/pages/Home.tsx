import { useNavigate } from 'react-router-dom'
import Section from '../components/Section'
import styles from './home.module.css'

export default function Home() {
  const navigate = useNavigate()

  function handleSubmit() {
    navigate('/signin')
  }

  return (
    <>
      <Section>
        <div className={styles.pageContainer}>
          <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Helcome to your profile website</h1>
            <button onClick={handleSubmit} className={styles.getStartedButton}>
              Get Started
            </button>
          </div>
        </div>
      </Section>
    </>
  )
}
