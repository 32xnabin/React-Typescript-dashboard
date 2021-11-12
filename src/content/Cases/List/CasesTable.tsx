import { FC, ChangeEvent, useState } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';

import { CaseStatus } from 'src/types';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import { Myboscase } from 'src/types';
import { deleteCase, updateCase } from '../../../services/cases';
import { HorDiv } from './CaseTable.style';
import AlertDialog from '../../../components/AlertDialog';
import CheckedIcon from '../../../components/ThinSquare/CheckedIcon';
import UncheckedIcon from '../../../components/ThinSquare/UncheckedIcon';

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

const applyPagination = (
  myboscases: Myboscase[],
  page: number,
  limit: number
): Myboscase[] => {
  return myboscases.slice(page * limit, page * limit + limit);
};

const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ myboscases }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState('');
  const [selectedCases, setSelectedCases] = useState<string[]>(['']);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null,
  });

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
      id: 'all',
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

  const filteredCases = applyFilters(myboscases, filters);
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

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        style={{
          border: 0,
          boxShadow: 'none',
          padding: '28px 18px',
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
            style={{ minWidth: 200, height: 30, marginRight: 20 }}
            value={filters.status || 'all'}
            onChange={handleStatusChange}
            label="Status"
            autoWidth
          >
            {statusOptions.map((statusOption) => (
              <MenuItem key={statusOption.id} value={statusOption.id}>
                {statusOption.name}
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
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredCases.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
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
