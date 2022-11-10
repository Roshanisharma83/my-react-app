import Link from 'next/link'
import classNames from 'classnames'
import styles from './Navbar.module.scss'
<link href="/dist/output.css" rel="stylesheet"/>

console.log(styles)




const Nav = () => {
    return ( 
    <div className='navigation'>
        <h1 className={classNames(styles['navigation_h1'])}>Logo</h1>
        <nav  className={classNames(styles['navbar'])}>
            <ul className=''>
            <li>
                <Link href="/" >
                <a className={classNames(styles['home'])}>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/About">
                <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/Roshani">
                <a>Roshani</a>
                </Link>
            </li>
            </ul>
        </nav>
    </div>
  )
}
export default Nav;