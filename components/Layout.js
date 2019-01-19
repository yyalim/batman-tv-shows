import { Fragment } from 'react'
import Header from './Header'

const Layout = ({ children }) => (
  <Fragment>
    <Header/>
    <main>
      {children}
    </main>
  </Fragment>
)

export default Layout