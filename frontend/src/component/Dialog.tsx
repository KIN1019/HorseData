import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Paper, PaperProps } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { EmptyDashboardStore } from '../store/EntryDashboardStore';

export const TableDialog = (e:boolean) => {
  const [open, setOpen] = useState(true);
  const DashboardStore = useContext(EmptyDashboardStore)
  function PaperComponent(props: PaperProps) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  useEffect(()=>{
    console.log(DashboardStore.entity.dialogStatus)
  },[])
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle>这是对话框标题</DialogTitle>
        <DialogContent>
          <p>这是对话框内容。</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            关闭
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}