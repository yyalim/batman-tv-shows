import Layout from '../components/Layout'
import { withRouter } from 'next/router'

const Details = props => (
  <Layout>
    <h1>Details</h1>
    <p>Id: {props.url.query.id}</p>
  </Layout>
)

export default withRouter(Details)