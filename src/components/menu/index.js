import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';

function Menu({
  isOpen = true,
  list = [
    { name: 'Menu item 1' },
    { name: 'Menu item 2' },
  ]
}) {
  return (
    <Menu open={isOpen}>
      {list.map(item, => (
        <MenuItem>
          <div>{item.name}</div>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default Menu;
