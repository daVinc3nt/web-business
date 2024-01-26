import { ListItemButton } from "@mui/material";
import Link from 'next/link'

interface MenuItem {
  title: string;
  url: string;
  submenu?: MenuItem[];
}

const SidebarItem: React.FC<MenuItem>  = (menuItems) => {

  return (
      <ListItemButton
        component={Link}
        href={menuItems.url}
        sx={{
          "&: hover": {
            backgroundColor: "#1e293a"
          },
          paddingY: "12px",
          paddingX: "24px"
        }}
      >
        {menuItems.title}
      </ListItemButton>
  );
};

export default SidebarItem;