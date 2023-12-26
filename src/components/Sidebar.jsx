import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuOutlined from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useDispatch } from "react-redux";
import { logOut } from "../redux/userRedux";
import { cartReset } from "../redux/cartRedux";


export default function TemporaryDrawer() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);


  const toggleDrawer = (isOpen) => {
    setOpen(isOpen);
  };

  const handleLogout = async () => {
    await dispatch(logOut())
    await dispatch(cartReset())
  }


  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
          <ListItem key={"Profile"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={"Profile"} />
            </ListItemButton>
          </ListItem>
        
      </List>
      <Divider />
      <List>
        <ListItem key={"Log Out"} disablePadding onClick={handleLogout}>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Log Out"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={() => toggleDrawer(true)}>
        <MenuOutlined style={{ color: "black" }} />
      </Button>
      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
