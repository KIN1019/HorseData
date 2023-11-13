import React, { useContext, useEffect, useState } from 'react';
import { DataGrid, GridCellParams, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { EmptyDashboardStore } from '../store/EntryDashboardStore';
import { tableVM } from '../viewModel/TableVM';
import { Box } from '@mui/material';


export const TableView = () => {
  const [rows, setRows] = useState<[]>([]);
  const dashboardStore = useContext(EmptyDashboardStore);


  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (dashboardStore.entity.submitStatus) {
      fetchData();
      intervalId = setInterval(fetchData, 2000);
    }
    return () => clearInterval(intervalId);
  }, [dashboardStore.entity.submitStatus]);

  const fetchData = async () => {
    try {
      const data = await tableVM().getTableData(dashboardStore.entity.searchCriteria);
      const rowsWithIdAndPercentage = data.map((row: Record<string, unknown>, index: number) => ({
        ...row,
        id: String(index + 1),
        ...Object.fromEntries(
          Object.entries(row).map(([key, value]) => [key, value === '' ? '' : `${(parseFloat(String(value)) * 100).toFixed()}%`])
        ),
      }));
      setRows(rowsWithIdAndPercentage);
    } catch (error) {
      setRows(prevRows => {
        const newRows = prevRows || [];
        return [...newRows];
      });
    }
  };


  const renderColoredCell = (params: GridCellParams) => {
    const value = params.value;
  
    if (parseFloat(String(value)) > 51) {
      return 'super-app-darkGreen'
    } else if (parseFloat(String(value)) > 20) {
      return 'super-app-lightGreen'
    } else if (parseFloat(String(value)) > -16) {
      return 'super-app-nothing'
    } else if (parseFloat(String(value)) > -31) {
      return 'super-app-lightRed'
    } else if(parseFloat(String(value)) < -31){
      return 'super-app-darkRed'
    } else{
      return 'super-app-nothing'
    }
  };
  


  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: '',
      width: 70,
      headerAlign: 'center',
      cellClassName : 'id' },
    { field: '1', headerName: '1',  width: 100,  headerAlign: 'center',  cellClassName :(params) => renderColoredCell(params) },
    { field: '2', headerName: '2',  width: 100,  headerAlign: 'center',  cellClassName: (params) => renderColoredCell(params) },
    { field: '3', headerName: '3',  width: 100,  headerAlign: 'center',  cellClassName: (params) => renderColoredCell(params) },
    { field: '4', headerName: '4',  width: 100,  headerAlign: 'center',  cellClassName: (params) => renderColoredCell(params) },
    { field: '5', headerName: '5',  width: 100,  headerAlign: 'center',  cellClassName: (params) => renderColoredCell(params) },
    { field: '6', headerName: '6',  width: 100,  headerAlign: 'center',  cellClassName: (params) => renderColoredCell(params) },
    { field: '7', headerName: '7',  width: 100,  headerAlign: 'center',  cellClassName: (params) => renderColoredCell(params) },
    { field: '8', headerName: '8',  width: 100,  headerAlign: 'center',  cellClassName: (params) => renderColoredCell(params) },
    { field: '9', headerName: '9',  width: 100,  headerAlign: 'center',  cellClassName: (params) => renderColoredCell(params) },
    { field: '10', headerName:'10',  width: 100, headerAlign: 'center',  cellClassName: (params) => renderColoredCell(params) },
    { field: '11', headerName:'11',  width: 100, headerAlign: 'center',  cellClassName: (params) => renderColoredCell(params) },
    { field: '12', headerName:'12',  width: 100, headerAlign: 'center',  cellClassName: (params) => renderColoredCell(params) },
    { field: '13', headerName:'13',  width: 100, headerAlign: 'center',  cellClassName: (params) => renderColoredCell(params) },
    { field: '14', headerName:'14',  width: 100, headerAlign: 'center',  cellClassName: (params) => renderColoredCell(params) },
  ];

  const row = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
  ];

  return (
    <div style={{ height: '100%' , width: '100%', margin: '0% 25% 20% 6%' }}>
      {rows && rows.length > 0 ? (
      <Box
        sx={{
          height: '839px',  
          width: '100%',  
          '& .id':{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRight : '1px solid #000000',
          },
          '& .super-app-darkGreen': {
            backgroundColor: '#3b3b3b',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #000000',
          },
          '& .super-app-lightGreen': {
            backgroundColor: '#90EE90',
            color: '#1a3e72',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #000000',
          },
          '& .super-app-nothing': {
            backgroundColor: '#FFFFFF',
            color: '#1a3e72',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #000000',
          },
          '& .super-app-lightRed': {
            backgroundColor: '#f1807e',
            color: '#1a3e72',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #000000',
          },
          '& .super-app-darkRed': {
            backgroundColor: '#f70f1a',
            color: '#1a3e72',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #000000',
          },
        }}
        >

        <DataGrid rows={rows} columns={columns} disableColumnMenu />
        </Box>
      ) : (
        <Box
          sx={{
          height: '839px',
          width: '100%',
          '& .id': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: '1px solid #000000',
          },
        }}
    >
      <DataGrid rows={row} columns={columns} disableColumnMenu />
    </Box>
      )}
    </div>
  );
}
