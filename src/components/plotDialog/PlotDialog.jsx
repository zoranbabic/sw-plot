import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

import Button from 'components/shared/Button';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from './DialogParts';

const PlotDialog = ({
  handleClose,
  open,
  // plotValues,
}) => (
  <Dialog
    onClose={handleClose}
    open={open}
  >
    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
      Modal title
    </DialogTitle>
    <DialogContent dividers>
      <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
      </Typography>
      <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor.
      </Typography>
      <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
              auctor fringilla.
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={handleClose}
        color="primary"
        label="common.close"
      />
    </DialogActions>
  </Dialog>
);

PlotDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // plotValues: PropTypes.object.isRequired,
};

export default PlotDialog;
