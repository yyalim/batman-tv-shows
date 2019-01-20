import { connect } from 'react-redux'
import { handleGetShowDetails } from '../actions/details'
import Layout from '../components/Layout'
import { withRouter } from 'next/router'
import styles from './details.scss'

const Details = ({ details }) => (
  <Layout>
    <h1>{details.name}</h1>
    <div className={styles.details}>
      <img
        className={styles.showImage}
        src={details.image.original}
        alt={details.name}
      />
      <div
        className={styles.summary}
        dangerouslySetInnerHTML={{ __html: details.summary }}
      />
    </div>
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