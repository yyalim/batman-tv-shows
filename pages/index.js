import Layout from '../components/Layout'
import { withRouter } from 'next/router'

const Index = props => (
  <Layout>
    <h1>BATMAN TV SHOWS</h1>
  </Layout>
)

export default withRouter(Index)