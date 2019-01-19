import { connect } from 'react-redux'
import { handleGetShowDetails } from '../actions/details'
import Layout from '../components/Layout'
import { withRouter } from 'next/router'

const Details = ({ details }) => (
  <Layout>
    <h1>{details.name}</h1>
    <img src={details.image.original} alt={details.name}/>
    <div dangerouslySetInnerHTML={{ __html: details.summary }} />
  </Layout>
)

Details.getInitialProps = ({ store, ...props }) => {
  const id = props.query.id
  return store.dispatch(handleGetShowDetails(id))
}

const mapStateToProps = ({ details, ...props }) => ({
  details,
  ...props
})

const ConnectedDetails = connect(mapStateToProps)(withRouter(Details))

export default ConnectedDetails