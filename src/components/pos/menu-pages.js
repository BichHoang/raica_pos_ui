import { map } from 'lodash';
import { drawerWidth, borderColor } from '../constants';
import '../../stylesheets/menu-pages.css';

const data = [
  { page: 1, name: 'Bún Đậu' },
  { page: 2, name: 'Nước' },
];

function MenuPages() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: drawerWidth,
      right: 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderTop: `1px solid ${borderColor}`,
      backgroundColor: '#0e451f',
      color: 'white',
      height: '80px',
    }}>
      {map(data, page => (
        <div key={page.page} className='MenuPages-button'>{page.name}</div>
      ))}
      <div key='library' className='MenuPages-button'>Thư Viện</div>
    </div>
  );
}

export default MenuPages;
