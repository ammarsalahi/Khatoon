import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({open, setOpen, confirm}) {


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            آیا از حذف این محصول اطمینان دارید؟
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >لغو</Button>
          <Button onClick={confirm} autoFocus variant="contained">
            تایید
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
