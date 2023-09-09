import React, { useState, useEffect } from 'react';
import Table from '../components/table';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import gapi from 'gapi-client';

console.log('gapi:', gapi, process.env.REACT_APP_API_HOST, process.env.REACT_APP_GOOGLE_API_KEY, process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID)

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';

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
  const [gapiLoaded, setGapiLoaded] = useState(false);

  useEffect(() => {
    // 1. Load the JavaScript client library.
    if (!gapiLoaded) {
      console.log('useEffect')
      gapi.load('client', startGapi);
    }
  }, [gapiLoaded, startGapi]);

  async function startGapi() {
    console.log('startGapi')
    // 2. Initialize the JavaScript client library.
    await gapi.client.init({
      'apiKey': process.env.REACT_APP_GOOGLE_API_KEY,
      // Your API key will be automatically added to the Discovery Document URLs.
      'discoveryDocs': [DISCOVERY_DOC],
      // clientId and scope are optional if auth is not required.
      'clientId': process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
      'scope': SCOPES,
    }).then(function() {
      console.log('line 20')
      // 3. Initialize and make the API request.
      // return gapi.client.people.people.get({
      //   'resourceName': 'people/me',
      //   'requestMask.includeField': 'person.names'
      // });
    }).then(function(response) {
      console.log('line 27')
      console.log(response.result);
    }, function(reason) {
      console.log('line 30')
      console.log('Error: ' + reason.result.error.message);
    });
    setGapiLoaded(true);
  };

  console.log('gapiLoaded?', gapiLoaded)

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
