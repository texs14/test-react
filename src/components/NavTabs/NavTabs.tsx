import React from 'react'
import { NavLink } from 'react-router-dom'
import NavTabsStyle from './navTabs.module.scss'

interface INavTabsProps {
  links: {
    linkName: string
    path: string
  }[]
  baseUrl?: string
}

const { navTabs, navTabs__tab, navTabs__tab_active } = NavTabsStyle

const NavTabs: React.FunctionComponent<INavTabsProps> = (props) => {
  const { links, baseUrl = 'table' } = props

  return (
    <nav className={navTabs}>
      {links.map((link) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${navTabs__tab} ${navTabs__tab_active}`
              : `${navTabs__tab}`
          }
          to={`/${baseUrl}/${link.path}`}
          key={link.linkName}
        >
          {link.linkName}
        </NavLink>
      ))}
    </nav>
  )
}

export default NavTabs
