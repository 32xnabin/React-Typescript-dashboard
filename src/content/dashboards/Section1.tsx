import React from 'react';
import { Card } from '@material-ui/core';

import { Holder, ReactCalender } from './Common.style';

const Section1: React.FC = () => {
  const [value, setValue] = React.useState(new Date());
  const onChange = () => {
    setValue(new Date());
  };

  return (
    <Card style={{ height: '400px' }}>
      <Holder background={'45a7c1'}>
        <ReactCalender onChange={onChange} value={value} />
      </Holder>
    </Card>
  );
};

export default Section1;
