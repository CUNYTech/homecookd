import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const OperationHours = () => (
  <div>
  <h4>From</h4>
    <TimePicker
      hintText="Opening"
    />
    
    <h4>To</h4>
    <TimePicker
      hintText="Closing"
    />
  </div>
);

export default OperationHours;
