import * as React from 'react';
import Table from '../components/table';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const columns = [
  { field: 'paidTime', headerName: 'Thời gian thanh toán', width: 160 },
  { field: 'id', headerName: 'Số tham chiếu', type: 'number', width: 120 },
  { field: 'isTakeout', headerName: 'Loại phục vụ', width: 120 },
  { field: 'paymentMethod', headerName: 'Phương thức thanh toán', width: 180 },
  { field: 'totalAmount', headerName: 'Giá trị đơn hàng', width: 130 },
];

const rows = [
  { paidTime: '27/06/2023 16:53', id: '111111', isTakeout: 'Ăn tại bàn', paymentMethod: 'Tiền mặt', totalAmount: '135.000 đ' },
  { paidTime: '27/06/2023 18:20', id: '222222', isTakeout: 'Mang đi', paymentMethod: 'Chuyển khoản', totalAmount: '164.000 đ' },
];

const data = {
  rows,
  columns,
};

function handleDownload() {
  return false;
}

export default function Orders() {
  return (
    <>
      <Typography variant="h5">
        Tất cả giao dịch
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          onClick={handleDownload}
          variant="contained"
          sx={{
            boxShadow: 'none',
            backgroundColor: '#23ad4e',
            marginBottom: '24px',
            '&:hover': { backgroundColor: '#187936' },
          }}
        >
          Tải Báo Cáo
        </Button>
      </div>
      <Table data={data} />
    </>
  );
}
