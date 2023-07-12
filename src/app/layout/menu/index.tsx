import { MenuLink } from "./menu-link"

interface MenuItem {
  title: string
  path: string
}

export const menuItems: MenuItem[] = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Origen",
    path: "/#why",
  },
  {
    title: "Condiciones",
    path: "/#conditions",
  },
  {
    title: "Creditos",
    path: "/#participants",
  },
  {
    title: "Ashoka",
    path: "/#ashoka",
  },
  {
    title: "La Dream Machine",
    path: "/#ldm",
  },
]

export const SideMenu = () => {
  return (
    <div className="space-y-2">
      {menuItems.map((item) => (
        <div key={item.path}>
          <MenuLink
            className="text-font-400"
            activeClassName="text-font"
            href={item.path}
          >
            {item.title}
          </MenuLink>
        </div>
      ))}
    </div>
  )
}
