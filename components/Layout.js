import { Fragment } from 'react'
import Head from 'next/head'
import Header from './Header'

const Layout = ({ children }) => (
  <Fragment>
    <Head>
      <title>Batman TV Shows</title>
    </Head>
    <Header/>
    <main>
      {children}
    </main>
  </Fragment>
)

export default Layout