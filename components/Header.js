import Link from 'next/link'
import styles from './Header.scss'

const NavLinkList = ({ children }) => (
  <ul className={styles.navLinkList}>
    {children}
  </ul>
)

const NavLink = ({ href, text }) => (
  <li>
    <Link href={href}>
      <a className={styles.navLink}>{text}</a>
    </Link>
  </li>
)

const Header = () => {
  const navigationLinks = [
    { href: '/', text: 'Home', key: 'home' },
    { href: 'about', text: 'About', key: 'about' }
  ]

  return (
    <header>
      <NavLinkList>
        {navigationLinks.map(navLinkProps => <NavLink {...navLinkProps} />)}
      </NavLinkList>
    </header>
  )
}

export default Header