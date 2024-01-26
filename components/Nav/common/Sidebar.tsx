import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
interface MenuItem {
  title: string;
  url: string;
  submenu?: MenuItem[];
}

interface MenuProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<MenuProps>  = ({menuItems}) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "300px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "300px",
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: "#233044",
          color: "#eeeeee"
        }
      }}
    >
      <List disablePadding>
        {menuItems.map((menu, index) => (
            menu.submenu? (
              <SidebarItemCollapse title={menu.title} url={menu.url} submenu={menu.submenu} key={index} />
            ) : (
              <SidebarItem  title={menu.title} url={menu.url} submenu={menu.submenu} key={index} />
            )
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;