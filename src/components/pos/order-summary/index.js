import { map, sumBy } from 'lodash';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { borderColor } from '../../constants';
import { currency } from '../../utils';
import '../../../stylesheets/order-summary.css';

function OrderSummary({ items }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flexBasis: '35%',
      flexGrow: 0,
      flexShrink: 0,
      justifyContent: 'space-between',
      borderLeft: `1px solid ${borderColor}`,
      height: 'calc(100vh - 145px)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{
          display: 'flex',
          borderBottom: `1px solid ${borderColor}`,
          padding: '12px',
        }}>
          Ăn tại bàn
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'scroll',
          maxHeight: '60vh',
        }}>
          {map(items, (item, index) => (
            <div
              key={`${item}-${index}`}
              className='OrderSummary-item'
              style={{ borderBottom: `1px dashed ${borderColor}` }}
            >
              <div className='OrderSummary-item-name'>{item.name}</div>
              <div className='OrderSummary-item-price'>{currency.format(item.price)}</div>
            </div>
          ))}
        </div>
      </div>
      {items.length > 0 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '120px',
          padding: '12px',
          borderTop: `1px solid ${borderColor}`,
        }}>
          <div>{`Tổng (${items.length} mặt hàng)`}</div>
          <Typography variant="h6">{currency.format(sumBy(items, 'price'))}</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', margin: '8px 0' }}>
            <Button
              variant="contained"
              sx={{ flexBasis: '50%', margin: '0 4px' }}
            >
              Lưu
            </Button>
            <Button
              variant="contained"
              sx={{ flexBasis: '50%', margin: '0 4px' }}
            >
              Thanh Toán
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
