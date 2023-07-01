import React, { useState } from 'react';
import SelectableItems from '../components/pos/selectable-items';
import OrderSummary from '../components/pos/order-summary';
import MenuPages from '../components/pos/menu-pages';
import { drawerWidth } from '../components/constants';

function POSPage() {
  const [items, setItems] = useState([]);

  function handleSelectItem(item) {
    const newItems = [...items, item];
    setItems(newItems);
  }

  return (
    <div style={{ position: 'fixed', width: `calc(100% - ${drawerWidth}px)` }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SelectableItems handleSelectItem={handleSelectItem} />
        <OrderSummary items={items} />
      </div>
      <MenuPages />
    </div>
  );
}

export default POSPage;
