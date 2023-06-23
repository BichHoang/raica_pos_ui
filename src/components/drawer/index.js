import * as React from 'react';
import DrawerItem from './DrawerItem';
import MuiDrawer from '@mui/material/Drawer';
import '../../stylesheets/Drawer.css';

export default function Drawer({ isOpen = true, items = [] }) {
  console.log("Drawer", items)
  return (
    <MuiDrawer open={isOpen} className="Drawer" variant="permanent">
      <div>Drawer</div>
      {items.map(item => (
        <DrawerItem data={item} />
      ))}
    </MuiDrawer>
  );
}
