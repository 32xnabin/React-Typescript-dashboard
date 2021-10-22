import { FC, ChangeEvent, useState } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Tooltip,
  Divider,
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core'

import { CaseStatus } from 'src/types'
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'
import { Myboscase } from 'src/types'
import { deleteCase, updateCase } from '../../../../services'
import { HorDiv } from './CaseTable.style'
import { experimentalStyled } from '@material-ui/core/styles'

const ButtonRed = experimentalStyled(Link)(
  ({ theme }) => `
     background: ${theme.colors.error.main};
     color: ${theme.palette.error.contrastText};
     padding: 6px 40px;
     border-radius: 6px;
     text-decoration:none;

     &:hover {
        background: ${theme.colors.error.dark};
     }
    `,
)

interface RecentOrdersTableProps {
  className?: string
  myboscases: Myboscase[]
}

interface Filters {
  status?: CaseStatus
}

const applyFilters = (
  myboscases: Myboscase[],
  filters: Filters,
): Myboscase[] => {
  return myboscases.filter((myboscase) => {
    let matches = true

    if (filters.status && myboscase.status !== filters.status) {
      matches = false
    }

    return matches
  })
}

const applyPagination = (
  myboscases: Myboscase[],
  page: number,
  limit: number,
): Myboscase[] => {
  return myboscases.slice(page * limit, page * limit + limit)
}

const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ myboscases }) => {
  const [selectedCases, setSelectedCases] = useState<string[]>([''])
  const selectedBulkActions = selectedCases.length > 0
  const [page, setPage] = useState<number>(0)
  const [limit, setLimit] = useState<number>(5)
  const [filters, setFilters] = useState<Filters>({
    status: null,
  })

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
      name: 'All',
    },
  ]

  const onCaseDelete = async (e) => {
    const id = e.currentTarget.getAttribute('data-value1')

    deleteCase(id)
      .then((result: any) => {
        console.log('result--update--->', result)

        window.location.reload()
      })
      .catch((error: any) => {
        console.log('error- form1->', error)
      })

    return true
  }

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null

    if (e.target.value !== 'all') {
      value = e.target.value
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }))
  }

  const handleSelectAllCases = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedCases(
      event.target.checked ? myboscases.map((item) => item.id) : [],
    )
    console.log('selected cases', selectedCases)
  }

  const handleSelectOneCryptoOrder = (
    event: ChangeEvent<HTMLInputElement>,
    caseId: string,
  ): void => {
    if (!selectedCases.includes(caseId)) {
      setSelectedCases((prevSelected) => [...prevSelected, caseId])
    } else {
      setSelectedCases((prevSelected) =>
        prevSelected.filter((id) => id !== caseId),
      )
    }
  }

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage)
  }

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value))
  }

  const filteredCases = applyFilters(myboscases, filters)
  const paginatedCases = applyPagination(filteredCases, page, limit)
  const selectedAllCases = selectedCases.length === myboscases.length

  const markAsComplete = (e) => {
    console.log('marking......', selectedCases)

    for (const id of selectedCases) {
      const data = { id, status: 'Completed' }
      updateCase(data)
        .then((result: any) => {
          console.log('result--update--->', result)
        })
        .catch((error: any) => {
          console.log('error- form1->', error)
        })
    }
    window.location.reload()
  }

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        style={{ border: 0, boxShadow: 'none', padding: 7 }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="start"
          style={{ border: 0, boxShadow: 'none' }}
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
          {selectedBulkActions && (
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
                  borderRadius: 10,
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
        <ButtonRed to="/bm/cases/create">New</ButtonRed>
      </Box>

      <Divider />
      <TableContainer style={{ border: 0, boxShadow: 'none' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllCases}
                  onChange={handleSelectAllCases}
                />
              </TableCell>
              <TableCell>#</TableCell>
              <TableCell>Added</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Assigned Contractors</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCases.map((item) => {
              const isCaseselected = selectedCases.includes(item.id)
              return (
                <TableRow hover key={item.id} selected={isCaseselected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isCaseselected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneCryptoOrder(event, item.id)
                      }
                      value={isCaseselected}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
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
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item.due_date
                        ? moment(new Date(item.due_date)).format('DD/MM/YYYY')
                        : moment(new Date()).format('DD/MM/YYYY')}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item.email_subject}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
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
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item.status}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item.assigned_to
                        ? item.assigned_to
                        : 'Ace hanndy andy,AZ-Electrician,Chummins'}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {item.priority}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <HorDiv>
                      <Tooltip title="Edit Case" arrow>
                        <Link to={`/bm/cases/edit?id=${item.id}`}>
                          <EditTwoToneIcon fontSize="small" />
                        </Link>
                      </Tooltip>
                      <Tooltip title="Delete Case" arrow>
                        <div
                          onClick={onCaseDelete}
                          style={{ cursor: 'pointer' }}
                          data-value1={item.id}
                        >
                          <DeleteTwoToneIcon fontSize="small" />
                        </div>
                      </Tooltip>
                    </HorDiv>
                  </TableCell>
                </TableRow>
              )
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
  )
}

RecentOrdersTable.propTypes = {
  myboscases: PropTypes.array.isRequired,
}

RecentOrdersTable.defaultProps = {
  myboscases: [],
}

export default RecentOrdersTable
