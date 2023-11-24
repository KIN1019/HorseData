import React, { useContext, useEffect, useState } from 'react';
import { DataGrid, GridCellParams, GridColDef} from '@mui/x-data-grid';
import { EmptyDashboardStore } from '../store/EntryDashboardStore';
import { tableVM } from '../viewModel/TableVM';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
interface RowData {
  id: number;
  value: string;
}

export const TableView = () => {

  const row: RowData[] = [
    { id: 1, value: ""},
    { id: 2, value: ""},
    { id: 3, value: ""},
    { id: 4, value: ""},
    { id: 5, value: ""},
    { id: 6, value: ""},
    { id: 7, value: ""},
    { id: 8, value: ""},
    { id: 9, value: ""},
    { id: 10, value: "" },
    { id: 11, value: "" },
    { id: 12, value: "" },
    { id: 13, value: "" },
    { id: 14, value: "" },
  ];

  const columns: GridColDef[] = [
    { field: 'id', headerName: '', width: 70, headerAlign: 'center', cellClassName: 'id' , align:'center'},
    { field: '1', headerName: '1', width: 100, headerAlign: 'center', cellClassName: (params) => renderColoredCell(params) , align:'center'},
    { field: '2', headerName: '2', width: 100, headerAlign: 'center', cellClassName: (params) => renderColoredCell(params) , align:'center'},
    { field: '3', headerName: '3', width: 100, headerAlign: 'center', cellClassName: (params) => renderColoredCell(params) , align:'center'},
    { field: '4', headerName: '4', width: 100, headerAlign: 'center', cellClassName: (params) => renderColoredCell(params) , align:'center'},
    { field: '5', headerName: '5', width: 100, headerAlign: 'center', cellClassName: (params) => renderColoredCell(params) , align:'center'},
    { field: '6', headerName: '6', width: 100, headerAlign: 'center', cellClassName: (params) => renderColoredCell(params) , align:'center'},
    { field: '7', headerName: '7', width: 100, headerAlign: 'center', cellClassName: (params) => renderColoredCell(params) , align:'center'},
    { field: '8', headerName: '8', width: 100, headerAlign: 'center', cellClassName: (params) => renderColoredCell(params) , align:'center'},
    { field: '9', headerName: '9', width: 100, headerAlign: 'center', cellClassName: (params) => renderColoredCell(params) , align:'center'},
    { field: '10', headerName: '10', width: 100, headerAlign: 'center', cellClassName: (params) => renderColoredCell(params) , align:'center'},
    { field: '11', headerName: '11', width: 100, headerAlign: 'center', cellClassName: (params) => renderColoredCell(params) , align:'center'},
    { field: '12', headerName: '12', width: 100, headerAlign: 'center', cellClassName: (params) => renderColoredCell(params) , align:'center'},
    { field: '13', headerName: '13', width: 100, headerAlign: 'center', cellClassName: (params) => renderColoredCell(params) , align:'center'},
    { field: '14', headerName: '14', width: 100, headerAlign: 'center', cellClassName: (params) => renderColoredCell(params) , align:'center'},
  ];
  const [rows, setRows] = useState<RowData[]>([]);
  const [visibleColumns, setVisibleColumns] = useState<string[]>(columns.map((col) => col.field));
  const [visibleRows, setVisibleRows] = useState<number[]>(row.map((row)=>row.id))
  const [selectRow, setSelectRow] = useState<string>("")
  const [selectColumn, setSelectColumn] = useState<string>("")
  const [firstMaster, setFirstMaster] = useState<boolean>(true)
  const [secondMaster, setSecondMaster] = useState<boolean>(true)
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
  const handleCellClick = (params: GridCellParams) => {
    setSelectRow(params.row.id)
    setSelectColumn(params.field)
  };

  const handleFirstGameAllChange = (e: boolean) => {
    if (e == true) {
      setVisibleColumns(columns.map((col) => col.field))
    } else {
      const filteredColumns = columns.filter((col) => col.field === "id");
      setVisibleColumns(filteredColumns.map((col) => col.field))
    }
  };

  const handleFirstGameChange = (field: string) => {
    if (visibleColumns.includes(field)) {
      setVisibleColumns(visibleColumns.filter((col) => col !== field));
    } else {
      setVisibleColumns([...visibleColumns, field]);
    }
  };

  const handleSecondGameAllChange = (e: boolean) => {
    if (e == true) {
      setVisibleRows(row.map((row) => row.id))
    } else {
      setVisibleRows([])
    }
  };

  const handleSecondGameChange = (id: number, e:any) => {
    if(e.target.checked == true){
      const result = [...visibleRows, id];
      setVisibleRows(result)
    }else{
      const result = visibleRows.filter((row) => row!=id)
      setVisibleRows(result)
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
    } else if (parseFloat(String(value)) < -31) {
      return 'super-app-darkRed'
    } else {
      return 'super-app-nothing'
    }
  };



  return (
    <div style={{ height: '100%', width: '100%', margin: '0% 0% 0% 1%' }}>
      {rows && rows.length > 0 ? (
        <Box
          sx={{
            height: '839px',
            width: '1472px',
            display: 'flex',
            border: '1px solid #000000',
            '& .id': {
              border: '1px solid #000000',
            },
            '& .super-app-darkGreen': {
              backgroundColor: '#3b3b3b',
              color: '#FFFFFF',
              border: '1px solid #000000',
            },
            
            '& .super-app-lightGreen': {
              backgroundColor: '#90EE90',
              color: '#1a3e72',
              border: '1px solid #000000',
            },
            '& .super-app-nothing': {
              backgroundColor: '#FFFFFF',
              color: '#1a3e72',
              border: '1px solid #000000',
            },
            '& .super-app-lightRed': {
              backgroundColor: '#f1807e',
              color: '#1a3e72',
              border: '1px solid #000000',
            },
            '& .super-app-darkRed': {
              backgroundColor: '#f70f1a',
              color: '#1a3e72',
              border: '1px solid #000000',
            },
          }}
        >
          <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={!firstMaster}
                  onChange={() => {
                    setFirstMaster(!firstMaster)
                    handleFirstGameAllChange(firstMaster)
                  }
                  }
                />
              }
              label="All"
              style={{ width: '70px' }}
            />
            {columns.map((col) => (
              col.field === 'id' ? (null) : (
                <FormControlLabel
                  key={col.field}
                  control={
                    <Checkbox
                      checked={visibleColumns.includes(col.field)}
                      onChange={() => handleFirstGameChange(col.field)}
                    />
                  }
                  label={col.headerName}
                  style={{ width: '50px' }}
                />
              )
            ))}
          </FormGroup>

          <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={!secondMaster}
                  onChange={() => {
                    setSecondMaster(!secondMaster)
                    handleSecondGameAllChange(secondMaster)
                    }
                  }
                />
              }
              label="All"
              style={{ width: '70px' }}
            />
          {rows.map((row) => (
            <FormControlLabel
              key={row.id}
              control={
                <Checkbox
                  checked={visibleRows.map((r) => r).includes(row.id)}
                  onChange={(e:any) => handleSecondGameChange(row.id, e)}
                />
              }
              label={row.id.toString()}
              style={{ width: '50px' }}
            />
          ))}
          </FormGroup>
          <DataGrid
            rows={rows}
            columns={columns.filter((col) => visibleColumns.includes(col.field))}
            disableColumnMenu={true}
            onCellClick={handleCellClick}
            rowSelection={true}
            rowBuffer={2}
            showCellVerticalBorder = {true}
            showColumnVerticalBorder = {true}
          />
          <>{selectColumn + "-" + selectRow}</>
        </Box>
      ) :
      (
        <div >
            <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={firstMaster}
                    onChange={() => {
                      setFirstMaster(!firstMaster)
                      handleFirstGameAllChange(!firstMaster)
                    }
                    }
                  />
                }
                label="All"
                style={{ width: '70px' }}
              />
              {columns.map((col) => (
                col.field === 'id' ? (null
                ) : (
                  <FormControlLabel
                    key={col.field}
                    control={
                      <Checkbox
                        checked={visibleColumns.includes(col.field)}
                        onChange={() => handleFirstGameChange(col.field)}
                      />
                    }
                    label={col.headerName}
                    style={{ width: '50px' }}
                  />
                )
              ))}
            </FormGroup>
            <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={secondMaster}
                  onChange={() => {
                    setSecondMaster(!secondMaster)
                    handleSecondGameAllChange(!secondMaster)
                    }
                  }
                />
              }
              label="All"
              style={{ width: '70px' }}
            />
          {row.map((row) => (
            <FormControlLabel
              key={row.id.toString()}
              control={
                <Checkbox
                checked={visibleRows.includes(row.id)}
                onChange={(e:any) => handleSecondGameChange(row.id, e)}
                />
              }
              label={row.id}
              style={{ width: '50px' }}
            />
          ))}
          </FormGroup>          
            <Box
              sx={{
                height: '839px',
                width: '1472px',
              }}
            >
              <DataGrid
                rows={row.filter((row)=>visibleRows.includes(row.id))}
                columns={columns.filter((col) => visibleColumns.includes(col.field))}
                disableColumnMenu={true}
                onCellClick={handleCellClick}
                checkboxSelection={false}
                showCellVerticalBorder = {true}
                showColumnVerticalBorder = {true}
                sx={{ border: '1px solid #000000' }}
              />
            </Box>
          </div>
        )}
    </div>
  );
}
