import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import StorefrontIcon from '@mui/icons-material/StorefrontOutlined';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import AssignmentIcon from '@mui/icons-material/AssignmentOutlined';
import InventoryIcon from '@mui/icons-material/InventoryOutlined';
import CategoryIcon from '@mui/icons-material/CategoryOutlined';
import WorkHistoryIcon from '@mui/icons-material/WorkHistoryOutlined';
import TopBar from './top-bar';
import { drawerWidth } from './constants';

const drawerItems = [
  { name: 'Trang Chủ', icon: <HomeIcon sx={{color: '#23ad4e'}} />, path: '/' },
  { name: 'POS', icon: <StorefrontIcon sx={{color: '#23ad4e'}} />, path: '/pos' },
  { name: 'Báo Cáo', icon: <DashboardIcon sx={{color: '#23ad4e'}} />, path: '/dashboard' },
  { name: 'Giao Dịch', icon: <AssignmentIcon sx={{color: '#23ad4e'}} />, path: '/orders' },
  { name: 'Mặt Hàng', icon: <InventoryIcon sx={{color: '#23ad4e'}} />, path: '/menu-items' },
  { name: 'Danh Mục', icon: <CategoryIcon sx={{color: '#23ad4e'}} />, path: '/categories' },
  { name: 'Chấm Công', icon: <WorkHistoryIcon sx={{color: '#23ad4e'}} />, path: '/timekeeping' },
  { name: 'Thiết Lập', icon: <SettingsIcon sx={{color: '#23ad4e'}} />, path: '/settings' },
];

function Layout({ children, handleLogout, window }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
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
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar
        handleDrawerToggle={handleDrawerToggle}
        handleLogout={handleLogout}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="site nav"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
