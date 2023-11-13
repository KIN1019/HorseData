import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Paper, PaperProps, ToggleButtonGroup, ToggleButton, Box, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { EmptyDashboardStore } from '../store/EntryDashboardStore';
import { UseVM } from '../viewModel/UseVM';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs, { Dayjs } from 'dayjs';

export const TableDialog = () => {
  const dashboardStore = useContext(EmptyDashboardStore)
  const [open, setOpen] = useState<boolean>(dashboardStore.entity.dialogStatus);
  const [venue, setVenue] = useState<string>('HV');
  const [round, setRound] = useState<string>('');
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  const [error, setError] = useState(false);
  const vm = UseVM()

  useEffect(()=>{
    setOpen(dashboardStore.entity.dialogStatus)
  },[dashboardStore.entity.dialogStatus])
  const handleClose = () => {
    vm.dialogStatus(false)
    
  };
  useEffect(()=>{
    setError(false)
    setRound("")

  },[dashboardStore.entity.dialogStatus])
  const handleSubmit = () => {
    if(round == ""){
      setError(true)
    }else{
      vm.dialogSubmit(venue, round, date)
      vm.dialogStatus(false)

    }
  }

  const handleVenueChange = (event: React.MouseEvent<HTMLElement>, newVenue : string) => {
    setVenue(newVenue);
  };

  const handleInputChange = (event:any) => {
    setRound(event.target.value);
  };
 

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        // PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <DialogTitle>Data select</DialogTitle>
      <DialogActions>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Controlled picker"
              value={date}
              onChange={(newDate) => setDate(newDate)}
            />
          </DemoContainer>
        </LocalizationProvider>

      </DialogActions>

      <DialogActions>
        <ToggleButtonGroup
          color="primary"
          value={venue}
          exclusive
          onChange={handleVenueChange}
          aria-label="Platform"
          >
          <ToggleButton value="HV">HV</ToggleButton>
          <ToggleButton value="ST">ST</ToggleButton>
          <ToggleButton value="S1">S1</ToggleButton>
          <ToggleButton value="S2">S2</ToggleButton>
          <ToggleButton value="S3">S3</ToggleButton>
        </ToggleButtonGroup>
      </DialogActions>

      <DialogActions> 
        <TextField 
          id="round" 
          label="round" 
          variant="outlined" 
          onChange={handleInputChange}
          error={error}
          helperText={error ? 'empty data' : ''}
        />
      </DialogActions>

      <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            submit
          </Button>
          <Button onClick={handleClose} color="primary">
            close
          </Button>
      </DialogActions>
    </Box>
      </Dialog>
    </div>
  );
}