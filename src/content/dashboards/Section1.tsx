import React from 'react';
import { Card, CardHeader, IconButton  } from '@material-ui/core';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Holder, ReactCalender } from './Common.style';

const Section1: React.FC = () => {
  const [value, setValue] = React.useState(new Date());
  const onChange = () => {
    setValue(new Date());
  };

  return (
    <Card className="card-calender">
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Holder className="content-holder">
        <ReactCalender onChange={onChange} value={value} />
      </Holder>
    </Card>
  );
};

export default Section1;
