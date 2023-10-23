import { NavLink } from '@remix-run/react'
import { NavBarMock } from '~/mocks/navbar-mock'
import { type NavLinkClassProps } from '~/types/navbar-type'

const NavBar = () => {
  const content = NavBarMock
  return (
    <nav className="flex items-center gap-4 px-4 py-2">
      {content?.map((nav, key) => {
        return (
          <NavLink
            to={`${nav.path}`}
            className={({ isActive, isPending }: NavLinkClassProps) =>
              `px-3 py-1 ${
                isPending
                  ? 'text-amber-500'
                  : isActive
                  ? 'text-blue-500'
                  : 'text-gray-500'
              }`
            }
            key={key}
          >
            <span className="p-0 m-0">{nav.title}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}

export default NavBar
