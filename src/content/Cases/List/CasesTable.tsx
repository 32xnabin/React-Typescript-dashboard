import { FC, ChangeEvent, useState, useEffect } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';

import {
  Tooltip,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Checkbox,
  TablePagination,
  TableRow,
  TableContainer,
  Typography,
} from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';

import { CaseStatus } from 'src/types';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import { Myboscase } from 'src/types';
import { deleteCase, updateCase } from '../../../services/cases';
import { HorDiv } from './CaseTable.style';
import AlertDialog from '../../../components/AlertDialog';
import CheckedIcon from '../../../components/ThinSquare/CheckedIcon';
import UncheckedIcon from '../../../components/ThinSquare/UncheckedIcon';

import { makeStyles, useTheme } from '@material-ui/styles';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import OutlinedInput from '@mui/material/OutlinedInput';

interface RecentOrdersTableProps {
  className?: string;
  myboscases: Myboscase[];
}

interface Filters {
  status?: CaseStatus;
}

const applyFilters = (
  myboscases: Myboscase[],
  filters: Filters
): Myboscase[] => {
  return myboscases.filter((myboscase) => {
    let matches = true;

    if (filters.status && myboscase.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const performFilter = (myboscases: Myboscase[], personName: string[]) => {
  if (personName.indexOf('Current Cases') !== -1) {
    return myboscases;
  }
  return myboscases.filter((myboscase) => {
    let matches = true;

    if (personName.indexOf(myboscase.status) === -1) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  myboscases: Myboscase[],
  page: number,
  limit: number
): Myboscase[] => {
  return myboscases.slice(page * limit, page * limit + limit);
};

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: 6,
  },
}));

const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ myboscases }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState('');
  const [selectedCases, setSelectedCases] = useState<string[]>(['']);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [personName, setPersonName] = useState<string[]>([]);
  const [filters, setFilters] = useState<Filters>({
    status: null,
  });

  useEffect(() => {
    setPersonName(['Current Cases']);
  }, []);

  const markAsCompleteVisible = () => {
    if (selectedCases.length > 1) return true;
    if (selectedCases.length === 1 && selectedCases[0] !== '') return true;
    return false;
  };

  const statusOptions = [
    {
      id: 'In Progress',
      name: 'In Progress',
    },
    {
      id: 'New',
      name: 'New',
    },

    {
      id: 'Completed',
      name: 'Completed',
    },
    {
      id: 'Deleted',
      name: 'Deleted',
    },
    {
      id: 'Awaiting Invoice',
      name: 'Awaiting Invoice',
    },
    {
      id: 'Awaiting Quote',
      name: 'Awaiting Quote',
    },
    {
      id: 'Current Cases',
      name: 'Current Cases',
    },
  ];

  const confirmDelete = () => {
    deleteCase(selectedCaseId)
      .then((result: any) => {
        setShowDeleteConfirm(false);
        window.location.reload();
      })
      .catch((error: any) => {});

    return true;
  };

  const onCaseDelete = async (e) => {
    const id = e.currentTarget.getAttribute('data-value1');
    setSelectedCaseId(id);
    setShowDeleteConfirm(true);
  };

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }));
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    // if (
    //   value !== 'Current Cases' &&
    //   personName.indexOf('Current Cases') !== -1
    // ) {
    //   setPersonName([]);
    // }
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleSelectAllCases = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedCases(
      event.target.checked ? myboscases.map((item) => item.id) : []
    );
  };

  const handleSelectOneCryptoOrder = (
    event: ChangeEvent<HTMLInputElement>,
    caseId: string
  ): void => {
    if (!selectedCases.includes(caseId)) {
      setSelectedCases((prevSelected) => [...prevSelected, caseId]);
    } else {
      setSelectedCases((prevSelected) =>
        prevSelected.filter((id) => id !== caseId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCases = performFilter(myboscases, personName);
  const paginatedCases = applyPagination(filteredCases, page, limit);
  const selectedAllCases = selectedCases.length === myboscases.length;

  const markAsComplete = (e) => {
    for (const id of selectedCases) {
      const data = { id, status: 'Completed' };
      updateCase(data)
        .then((result: any) => {})
        .catch((error: any) => {});
    }
    window.location.reload();
  };

  const getJobArea = (jobArea: string) => {
    if (jobArea && jobArea.startsWith('[')) {
      return JSON.parse(jobArea)[0];
    }
    return jobArea;
  };
  const CustomActions = (props) => {
    const { count, page, rowsPerPage } = props;
    return (
      <div
        className="nextAction"
        style={{ display: 'flex', alignItems: 'center', background: '#fff' }}
      >
        Pages
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '6px',
            width: '120px !important',
            marginLeft: '5px',
          }}
        >
          <IconButton
            onClick={(event) => handlePageChange(event, page - 1)}
            disabled={page === 0}
          >
            <ArrowBackIosNewSharpIcon
              style={{ color: '#cccc', fontSize: 16 }}
            />
          </IconButton>
          {page}
          <IconButton
            onClick={(event) => handlePageChange(event, page + 1)}
            disabled={page === Math.ceil(count / rowsPerPage) - 1}
          >
            <ArrowForwardIosSharpIcon
              style={{ color: '#cccc', fontSize: 16 }}
            />
          </IconButton>
        </div>
      </div>
    );
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        style={{
          border: 0,
          boxShadow: 'none',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="start"
          style={{
            border: 0,
            boxShadow: 'none',
            padding: 18,
            position: 'relative',
            top: '3px',
            zIndex: 3,
          }}
        >
          <Select
            style={{ width: '250px', height: '30px' }}
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => selected.join(', ')}
          >
            {statusOptions.map((statusOption) => (
              <MenuItem key={statusOption.id} value={statusOption.id}>
                <Checkbox
                  checked={personName.indexOf(statusOption.name) > -1}
                />
                <ListItemText primary={statusOption.name} />
              </MenuItem>
            ))}
          </Select>

          {markAsCompleteVisible() && (
            <Tooltip title="Mark As Complete" arrow>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  background: '#ccc',
                  alignItems: 'center',
                  cursor: 'pointer',
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                }}
              >
                <FontAwesomeIcon
                  onClick={markAsComplete}
                  color="white"
                  icon={faCheck}
                />
              </div>
            </Tooltip>
          )}
        </Box>
      </Box>
      <AlertDialog
        confirmDelete={confirmDelete}
        showDeleteConfirm={showDeleteConfirm}
        setShowDeleteConfirm={setShowDeleteConfirm}
        message={'Delete this case ?'}
      />

      <TableContainer style={{ border: 0, boxShadow: 'none' }}>
        <Table>
          <TableHead style={{ background: '#fff !important' }}>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  icon={<UncheckedIcon />}
                  checkedIcon={<CheckedIcon />}
                  style={{ width: '30px', height: '30px' }}
                  checked={selectedAllCases}
                  onChange={handleSelectAllCases}
                />
              </TableCell>
              <TableCell>
                <Typography
                  fontSize={14}
                  color="text.primary"
                  fontWeight="bold"
                  style={{ textTransform: 'none' }}
                  gutterBottom
                  noWrap
                >
                  Case#
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  fontSize={14}
                  fontWeight="bold"
                  color="text.primary"
                  style={{ textTransform: 'none' }}
                  gutterBottom
                  noWrap
                >
                  Added
                </Typography>
              </TableCell>

              <TableCell>
                <Typography
                  fontSize={14}
                  fontWeight="bold"
                  style={{ textTransform: 'none' }}
                  color="text.primary"
                  gutterBottom
                  noWrap
                >
                  Subject
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  fontSize={14}
                  fontWeight="bold"
                  style={{ textTransform: 'none' }}
                  color="text.primary"
                  gutterBottom
                  noWrap
                >
                  Type
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  fontSize={14}
                  fontWeight="bold"
                  color="text.primary"
                  style={{ textTransform: 'none' }}
                  gutterBottom
                  noWrap
                >
                  Assigned contractors
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  fontSize={14}
                  fontWeight="bold"
                  color="text.primary"
                  style={{ textTransform: 'none' }}
                  gutterBottom
                  noWrap
                >
                  Priority
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  fontSize={14}
                  fontWeight="bold"
                  color="text.primary"
                  style={{ textTransform: 'none' }}
                  gutterBottom
                  noWrap
                >
                  Job area
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  fontSize={14}
                  fontWeight="bold"
                  color="text.primary"
                  style={{ textTransform: 'none' }}
                  gutterBottom
                  noWrap
                >
                  Apartments
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  fontSize={14}
                  fontWeight="bold"
                  style={{ textTransform: 'none' }}
                  color="text.primary"
                  gutterBottom
                  noWrap
                >
                  Status
                </Typography>
              </TableCell>

              <TableCell>
                <Typography
                  fontSize={14}
                  fontWeight="bold"
                  color="text.primary"
                  style={{ textTransform: 'none' }}
                  gutterBottom
                  noWrap
                >
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCases.map((item) => {
              const isCaseselected = selectedCases.includes(item.id);
              return (
                <TableRow hover key={item.id} selected={isCaseselected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      icon={<UncheckedIcon />}
                      checkedIcon={<CheckedIcon />}
                      style={{ width: '30px', height: '30px' }}
                      checked={isCaseselected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneCryptoOrder(event, item.id)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      fontSize={14}
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item.case_number}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      fontSize={14}
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item.added_date
                        ? moment(new Date(item.added_date)).format('DD/MM/YYYY')
                        : moment(new Date()).format('DD/MM/YYYY')}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography
                      fontSize={14}
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item.email_subject === ''
                        ? 'Maintainable Request'
                        : item.email_subject}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      fontSize={14}
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item.case_type}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      fontSize={14}
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item.assigned_to
                        ? item.assigned_to
                        : 'AZ-Electrician,Chummins'}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      fontSize={14}
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item.priority}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      fontSize={14}
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {getJobArea(item.job_area)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      fontSize={14}
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item.apartment === 'Pick Appartments' ||
                      item.apartment === 'Pick Apartments' ||
                      item.apartment === undefined
                        ? '103'
                        : item.apartment}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      fontSize={14}
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item.status}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <HorDiv>
                      <Tooltip title="Edit Case" arrow>
                        <Link to={`/bm/cases/edit?id=${item.id}`}>
                          <EditTwoToneIcon
                            style={{ fill: '#3996d3' }}
                            fontSize="small"
                          />
                        </Link>
                      </Tooltip>
                      <Tooltip title="Delete Case" arrow>
                        <div
                          onClick={onCaseDelete}
                          style={{ cursor: 'pointer' }}
                          data-value1={item.id}
                        >
                          <DeleteTwoToneIcon
                            style={{ fill: '#3996d3' }}
                            fontSize="small"
                          />
                        </div>
                      </Tooltip>
                    </HorDiv>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        style={{ background: '#fff', padding: '30px 20px' }}
        component="div"
        count={filteredCases.length}
        labelRowsPerPage="Show"
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25, 30]}
        ActionsComponent={CustomActions}
        labelDisplayedRows={({ from, to, count }) =>
          `entries  Showing ${from}-${to} of  ${count} entries`
        }
      />
    </>
  );
};

RecentOrdersTable.propTypes = {
  myboscases: PropTypes.array.isRequired,
};

RecentOrdersTable.defaultProps = {
  myboscases: [],
};

export default RecentOrdersTable;
