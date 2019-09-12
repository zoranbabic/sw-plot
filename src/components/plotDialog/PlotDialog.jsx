import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import _ from 'lodash';

import Text from 'components/shared/Text';

import Button from 'components/shared/Button';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
} from './DialogParts';

const PLOT_LIST = [
  'INTO_THE_SUNSET',
  'SAVING_THE_PLANET',
];

const PlotDialog = ({
  handleClose,
  open,
  plotValues,
}) => {
  const [plot, setPlot] = useState();
  useEffect(() => {
    if (open) {
      setPlot(_.sample(PLOT_LIST));
    }
  }, [open]);
  return (
    <Dialog
      onClose={handleClose}
      open={open}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {plotValues.title}
      </DialogTitle>
      <DialogContent dividers>
        <Text message={`plot.${plot}`} values={plotValues} />
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
};

PlotDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  plotValues: PropTypes.object.isRequired,
};

export default PlotDialog;
