import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import Icon from '@mui/material/Icon';
import TopBar from './top-bar';

const drawerWidth = 240;

const drawerItems = [
  { name: 'Trang Chủ', icon: <HomeIcon sx={{color: '#23ad4e'}} />, path: '/' },
  { name: 'Báo Cáo', icon: <DashboardIcon sx={{color: '#23ad4e'}} />, path: '/dashboard' },
  { name: 'Giao Dịch', icon: <AssignmentIcon sx={{color: '#23ad4e'}} />, path: '/orders' },
  { name: 'Mặt Hàng', icon: <InventoryIcon sx={{color: '#23ad4e'}} />, path: '/inventory' },
  { name: 'Thiết Lập', icon: <SettingsIcon sx={{color: '#23ad4e'}} />, path: '/settings' },
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
