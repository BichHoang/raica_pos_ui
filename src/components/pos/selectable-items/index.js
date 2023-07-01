import { map, noop } from 'lodash';
import { borderColor } from '../../constants';
import '../../../stylesheets/selectable-items.css';

const maxItemCount = 25;

const data = [
  { name: 'Bún Đậu Thịt', price: 50000, position: 0 },
  { name: 'Bún Đậu Dồi Sụn', price: 50000, position: 1 },
  { name: 'Bún Đậu Đặc Biệt', price: 50000, position: 2 },
  { name: 'Bún Đậu Chả Cốm', price: 50000, position: 3 },
  { name: 'Bún Đậu Nem Chua Rán', price: 50000, position: 5 },
  { name: 'Chả Cốm', price: 50000, position: 6 },
  { name: 'Nem Chua Rán', price: 50000, position: 7 },
  { name: 'Đậu Hũ Chiên', price: 50000, position: 10 },
  { name: 'Thịt Chân Giò Rút Xương', price: 50000, position: 11 },
];

function SelectableItems({ handleSelectItem }) {
  const sorted = data.sort((a, b) => a.position - b.position);
  const maxPosition = sorted[sorted.length - 1].position;
  const transformedData = [];

  let prev = -1;

  for(let i = 0; i < data.length; i++) {
    let item = data[i];
    let curr = item.position;
    if (curr === prev + 1) {
      prev = curr;
      transformedData.push(item);
    } else if (curr > prev + 1) {
      while (curr > prev + 1) {
        prev += 1;
        transformedData.push({ name: null, position: prev });
      }
      prev = curr;
      transformedData.push(item);
    }
  };

  for (let i = maxPosition + 1; i < maxItemCount; i++) {
    transformedData.push({ name: null, position: i });
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexBasis: '60%',
      flexShrink: 0,
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      backgroundColor: '#fefefe',
      overflowY: 'scroll',
      height: 'calc(100vh - 145px)',
    }}>
      {map(transformedData, item => (
        <div
          key={`${item.name}-${item.position}`}
          className='SelectableItems-item'
          style={{ border: `1px solid ${borderColor}`, cursor: item.name === null ? 'auto' : 'pointer' }}
          onClick={() => item.name === null ? noop : handleSelectItem(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default SelectableItems;
