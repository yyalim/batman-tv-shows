import Layout from '../components/Layout'
import { withRouter } from 'next/router'
import styles from './about.scss'

const About = ()  => (
  <Layout>
    <h1>ABOUT</h1>
    <p className={styles.aboutBatman}>
      Batman is a fictional superhero appearing in American comic books published
      by DC Comics. The character was created by artist Bob Kane and writer Bill Finger,
      and first appeared in Detective Comics #27, in 1939.
    </p>
    <p className={styles.quote}>
      "Let that be a lesson. In future, be more careful from who you accept free lemonade."<br/>
      <span className={styles.batman}>- Batman</span>
    </p>
  </Layout>
)

export default withRouter(About)