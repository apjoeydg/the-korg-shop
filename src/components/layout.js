import * as React from 'react'
import { Link } from 'gatsby'
import {container} from './layout.module.css'
import { useStaticQuery, graphql } from 'gatsby'


const Layout = ({ children }) => {

const data = useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`)

  return (
    <div className={container}>
      <title> {data.site.siteMetadata.title}</title>
      <header>{data.site.siteMetadata.title}</header>
      <nav className={nav}>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
          
          <li className={navLinkItem}><Link className={navLinkItem} to="/synths/synthesizers">Synths</Link></li>
        </ul>
      </nav>
      <main>
        
        {children}
      </main>
    </div>
  )
}

export default Layout