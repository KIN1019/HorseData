import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Paper, PaperProps } from '@mui/material';
import React, { useState } from 'react';
import Draggable from 'react-draggable';

export const TableDialog = () => {
  const [open, setOpen] = useState(true);
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