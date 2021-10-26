import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function AlertDialog({
  confirmDelete,
  message,
  showDeleteConfirm,
  setShowDeleteConfirm,
}) {
  React.useEffect(() => {
    setOpen(showDeleteConfirm)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDeleteConfirm])

  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setShowDeleteConfirm(false)
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alert!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmDelete}>CONFIRM</Button>
          <Button onClick={handleClose} autoFocus>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
