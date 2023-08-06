import * as React from 'react';
import Table from '../components/table';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Tên', width: 150 },
  { field: 'job', headerName: 'Vị trí', width: 100 },
  {
    field: 'hourly',
    headerName: 'Lương',
    type: 'number',
    width: 100,
  },
  {
    field: 'tamUng',
    headerName: 'Tạm ứng',
    type: 'number',
    width: 120,
  },
  {
    field: 'note',
    headerName: 'Ghi chú',
    type: 'number',
    width: 150,
  },
  {
    field: 'hoursWorked',
    headerName: 'Số giờ làm việc',
    type: 'number',
    width: 150,
  },
  {
    field: 'total',
    headerName: 'Tổng',
    type: 'number',
    width: 120,
  },
];

const rows = [
  { id: 1, name: 'Sơn', job: 'Bếp', hourly: 22000, tamUng: 3000000 },
  { id: 2, name: 'Hiền', job: 'Phụ bếp', hourly: 22000, tamUng: 2000000 },
  { id: 3, name: 'Linh', job: 'Phục vụ', hourly: 21000, tamUng: 1500000 },
  { id: 4, name: 'Nhi', job: 'Phục vụ', hourly: 20000, tamUng: 0 },
  { id: 5, name: 'Huế', job: 'Phục vụ', hourly: 20000, tamUng: 1000000 },
];

const data = {
  rows,
  columns,
};

function handleCreate() {
  return false;
}

function TimekeepingPage() {
  return (
    <div style={{ padding: '24px' }}>
      <Typography variant="h5">
        Nhân viên
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
          Tạo Nhân Viên
        </Button>
      </div>
      <Table data={data} />
    </div>
  );
}

export default TimekeepingPage;
