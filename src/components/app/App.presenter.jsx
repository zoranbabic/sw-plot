import React, { useState } from 'react';

import PlotForm from 'components/plotForm/Form.container';
import PlotDialog from 'components/plotDialog/PlotDialog';

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [plotValues, setPlotValues] = useState({});
  const handleClose = () => setShowDialog(false);
  const onSubmit = (values) => { setPlotValues(values); setShowDialog(true); };

  return (
    <div>
      <PlotForm onSubmit={onSubmit} />
      <PlotDialog
        open={showDialog}
        handleClose={handleClose}
        plotValues={plotValues}
      />
    </div>
  );
}

export default App;
