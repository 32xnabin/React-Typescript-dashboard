import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Card, Typography, Box, CardContent, IconButton } from '@material-ui/core';
import DonutChart from 'react-donut-chart';
import { Myboscase } from '../../types';
import { getAllCases } from '../../services/cases';
import { Holder } from './Common.style';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Section2: React.FC = () => {
  let navigate = useNavigate();
  const filterCases = (duration, casesNow) => {
    const thisWeek = moment().startOf('week').format('MMMM DD h:mm A');
    const thisMonth = moment().startOf('month').format('MMMM DD h:mm A');
    const threeMonth = moment()
      .startOf('month')
      .subtract(3, 'month')
      .format('MMMM DD h:mm A');
    const sixMonth = moment()
      .startOf('month')
      .subtract(6, 'month')
      .format('MMMM DD h:mm A');
    const twelveMonth = moment()
      .startOf('month')
      .subtract(12, 'month')
      .format('MMMM DD h:mm A');
    let durationDate = '';
    const currDate = moment().startOf('day').format('MMMM DD h:mm A');
    switch (duration) {
      case 'TODAY':
        durationDate = currDate;
        break;
      case 'THIS_WEEK':
        durationDate = thisWeek;
        break;
      case 'THIS_MONTH':
        durationDate = thisMonth;
        break;
      case 'THREE_MONTHS':
        durationDate = threeMonth;
        break;
      case 'SIX_MONTHS':
        durationDate = sixMonth;
        break;
      case 'TWELVE_MONTHS':
        durationDate = twelveMonth;
        break;
      default:
        break;
    }

    const filtered = casesNow.filter((item) =>
      moment(moment(item.updatedAt).format('MMMM DD h:mm A')).isAfter(
        moment(durationDate)
      )
    );

    const namesOnly = filtered.map((item) => {
      return item.case_type;
    });

    const count = {};
    namesOnly.forEach((e) => (count[e] ? count[e]++ : (count[e] = 1)));
    const keys = Object.keys(count);
    let total = 0;
    for (let i = 0; i < keys.length; i++) {
      total += count[keys[i]];
    }
    const finalArray = [];
    for (let i = 0; i < keys.length; i++) {
      finalArray.push({
        label: keys[i],
        value: (count[keys[i]] / total) * 100,
      });
    }

    setFilteredCases(finalArray);
  };

  const mock_assigned_to = [
    { value: 'THREE_MONTHS', label: 'Three Months' },
    { value: 'TODAY', label: 'Today' },
    { value: 'THIS_WEEK', label: 'This Week' },
    { value: 'THIS_MONTH', label: 'Monthly' },
    { value: 'THREE_MONTHS', label: 'Three Months' },
    { value: 'SIX_MONTHS', label: 'Six Months' },
    { value: 'TWELVE_MONTHS', label: 'Twelve Months' },
  ];

  const [mybosCases, setMybosCases] = React.useState<Myboscase[]>();
  const [filteredCases, setFilteredCases] =
    React.useState<{ value: string; label: string }[]>();

  React.useEffect(() => {
    getAllCases()
      .then((res) => {
        setMybosCases(res);
        filterCases('THREE_MONTHS', res);
      })
      .catch((error) => {
        navigate('/login');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const colors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#607d8b',
  ];

  return (
    <Card className="card-graph">
      <CardContent>
        <div className="card-header">
        <Typography variant="h3" component="div">
          Cases graph
        </Typography>
        <div className="card-header-action">
        <select
          id="duration"
          name="duration"
          onChange={(e) => filterCases(e.target.value, mybosCases)}
        >
          {mock_assigned_to.map(
            (item: { value: string; label: string }, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            )
          )}
        </select>
        <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        </div>
        </div>
        <Box display="flex" alignItems="center" justifyContent="center">
        <Holder
          style={{
            width: '265px',
            height: '265px',
          }}
          className="grap-chart-holder"
        >
          <DonutChart
            legend={false}
            innerRadius={0.7}
            outerRadius={0.3}
            selectedOffset={0.0}
            data={filteredCases}
            colors={colors}
          />
        </Holder>
      </Box>
      </CardContent>
      
    </Card>
  );
};

export default Section2;
