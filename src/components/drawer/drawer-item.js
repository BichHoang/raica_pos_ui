import * as React from 'react';
import logo from '../../images/logo.svg';

export default function DrawerItem({ data }) {
  return (
    <div className="DrawerItem">
      <img className="DrawerItem-img" src={data.img || logo} />
      <div className="DrawerItem-name">{data.name || 'Item'}</div>
    </div>
  );
}
