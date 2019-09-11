import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';

import Text from 'components/shared/Text';

import Button from 'components/shared/Button';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from './DialogParts';

const PlotDialog = ({
  handleClose,
  open,
  plotValues,
}) => (
  <Dialog
    onClose={handleClose}
    open={open}
  >
    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
      {plotValues.title}
    </DialogTitle>
    <DialogContent dividers>
      <Text message="plot.hero" values={{ planetName: 'Tatooine', personName: 'Luke' }} />
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
  plotValues: PropTypes.object.isRequired,
};

export default PlotDialog;
