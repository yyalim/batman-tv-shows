import { connect } from 'react-redux'
import { handleGetShows } from '../actions/shows'
import Layout from '../components/Layout'
import { withRouter } from 'next/router'
import { Link } from '../routes'
import styles from './index.scss'

const ShowLinkList = ({ children }) => (
  <ul className={styles.showLinkList}>
    {children}
  </ul>
)

const ShowLink = ({ show }) => (
  <li className={styles.showLinkItem}>
    <Link route="details" params={{ id: show.id }}>
      <a className={styles.showLink}>{show.name}</a>
    </Link>
  </li>
)

const Index = ({ showIds, shows }) => (
  <Layout>
    <h1>BATMAN TV SHOWS</h1>
    <ShowLinkList>
      {showIds.map(id => <ShowLink key={id} show={shows[id].show}/>)}
    </ShowLinkList>
  </Layout>
)

Index.getInitialProps = ({ store }) => (
  store.dispatch(handleGetShows())
)

const mapStateToProps = ({ shows }, ...props ) => ({
  showIds: Object.keys(shows),
  ...props
})

const ConnectedIndex = connect(mapStateToProps)(withRouter(Index))

export default ConnectedIndex