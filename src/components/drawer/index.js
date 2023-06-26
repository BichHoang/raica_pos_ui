import * as React from 'react';
import DrawerItem from './drawer-item';
import MuiDrawer from '@mui/material/Drawer';
import '../../stylesheets/drawer.css';

export default function Drawer({ isOpen = true, items = [] }) {
  return (
    <MuiDrawer open={isOpen} className="Drawer" variant="permanent">
      <div>Drawer</div>
      {items.map(item => (
        <DrawerItem data={item} />
      ))}
    </MuiDrawer>
  );
}
