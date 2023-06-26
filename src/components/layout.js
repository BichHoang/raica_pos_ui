import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Icon from '@mui/material/Icon';
import TopBar from './top-bar';

const drawerWidth = 240;

const drawerItems = [
  { name: 'Dashboard', icon: <InboxIcon />, path: '/dashboard' },
  { name: 'Second', icon: <InboxIcon /> },
  { name: 'Third', icon: <InboxIcon /> },
  { name: 'Fourth', icon: <InboxIcon /> },
  { name: 'Settings', icon: <InboxIcon />, path: '/settings' },
];

function Layout({ children, handleLogout }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar handleLogout={handleLogout} />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {drawerItems.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <ListItem key={item.name} button component={Link} to={item.path} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {ItemIcon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
