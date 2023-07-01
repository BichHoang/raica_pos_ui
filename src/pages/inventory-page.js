import * as React from 'react';
import Table from '../components/table';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'category', headerName: 'Category', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 90,
  },
];

const rows = [
  { id: 1, category: 'MENU', name: 'Bún Đậu Thịt', price: 35 },
  { id: 2, category: 'MENU', name: 'Bún Đậu Dồi Sụn', price: 42 },
  { id: 3, category: 'MENU', name: 'Bún Đậu Đặc Biệt', price: 45 },
  { id: 4, category: 'MENU', name: 'Bún Đậu Chả Cốm', price: 16 },
  { id: 5, category: 'MENU', name: 'Bún Đậu Nem Chua Rán', price: 50 },
  { id: 6, category: 'MENU', name: 'Chả Cốm', price: 150 },
  { id: 7, category: 'MENU', name: 'Nem Chua Rán', price: 44 },
  { id: 8, category: 'MENU', name: 'Đậu Hũ Chiên', price: 36 },
  { id: 9, category: 'MENU', name: 'Thịt Chân Giò Rút Xương', price: 65 },
];

const data = {
  rows,
  columns,
};

function handleCreate() {
  return false;
}

export default function Inventory() {
  return (
    <div style={{ padding: '24px' }}>
      <Typography variant="h5">
        Tất cả mặt hàng
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          onClick={handleCreate}
          variant="contained"
          sx={{
            boxShadow: 'none',
            backgroundColor: '#23ad4e',
            marginBottom: '24px',
            '&:hover': { backgroundColor: '#187936' },
          }}
        >
          Tạo Mặt Hàng
        </Button>
      </div>
      <Table data={data} />
    </div>
  );
}
