import { connect } from 'react-redux'
import { handleGetShows } from '../actions/shows'
import Layout from '../components/Layout'
import { withRouter } from 'next/router'
import { Link } from '../routes'

const ShowLinkList = ({ show }) => (
  <li>
    <Link route="details" params={{ id: show.id }}>
      <a>{show.name}</a>
    </Link>
  </li>
)

const Index = ({ showIds, shows }) => (
  <Layout>
    <h1>BATMAN TV SHOWS</h1>
    <ul>
      {showIds.map(id => <ShowLinkList key={id} show={shows[id].show}/>)}
    </ul>
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